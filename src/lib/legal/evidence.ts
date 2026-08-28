import { NextRequest, NextResponse } from "next/server";
import {
  CONSENT_TEXT_VERSION,
  PRIVACY_POLICY_VERSION,
  getConsentCopy,
  isFormId,
  isLocale,
  type FormId,
  type Locale,
} from "./consent-texts";

export type Campaign = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

export type EvidenceRecord = {
  submission_id: string;
  form_id: FormId;
  timestamp: string;
  consent_processing: true;
  consent_marketing: boolean;
  consent_text_version: string;
  consent_text_shown: string;
  privacy_policy_version: string;
  locale: Locale;
  source_url: string;
  campaign: Campaign;
  ip: string;
  user_agent: string;
  payload: Record<string, unknown>;
};

export type ConsentFields = {
  locale: Locale;
  formId: FormId;
  consentMarketing: boolean;
  sourceUrl: string;
  campaign: Campaign;
};

function madridTimestamp(): string {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "longOffset",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const offset = (get("timeZoneName").replace(/^GMT/, "") || "+00:00").replace(
    /^([+-]\d{2})$/,
    "$1:00",
  );
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}:${get("second")}${offset}`;
}

function firstForwardedIp(header: string | null): string {
  if (!header) return "";
  return header.split(",")[0]?.trim() ?? "";
}

function campaignFrom(body: Record<string, unknown>, sourceUrl: string): Campaign {
  const fromBody = (body.campaign as Campaign | undefined) ?? {};
  let fromUrl: Campaign = {};
  try {
    const url = new URL(sourceUrl);
    fromUrl = {
      utm_source: url.searchParams.get("utm_source") ?? undefined,
      utm_medium: url.searchParams.get("utm_medium") ?? undefined,
      utm_campaign: url.searchParams.get("utm_campaign") ?? undefined,
    };
  } catch {
    fromUrl = {};
  }
  const pick = (key: keyof Campaign) => fromBody[key] || fromUrl[key] || undefined;
  const campaign: Campaign = {};
  if (pick("utm_source")) campaign.utm_source = pick("utm_source");
  if (pick("utm_medium")) campaign.utm_medium = pick("utm_medium");
  if (pick("utm_campaign")) campaign.utm_campaign = pick("utm_campaign");
  return campaign;
}

export function rejectIfNoConsent(
  body: Record<string, unknown>,
): NextResponse | ConsentFields {
  if (body.consentProcessing !== true) {
    return NextResponse.json(
      {
        error: "Debes aceptar la Política de Privacidad para enviar el formulario.",
        code: "CONSENT_REQUIRED",
      },
      { status: 422 },
    );
  }

  if (!isLocale(body.locale) || !isFormId(body.formId)) {
    return NextResponse.json(
      { error: "locale o formId no válidos", code: "INVALID_CONSENT_CONTEXT" },
      { status: 400 },
    );
  }

  const sourceUrl =
    typeof body.sourceUrl === "string" && body.sourceUrl.length > 0 ? body.sourceUrl : "";

  return {
    locale: body.locale,
    formId: body.formId,
    consentMarketing: body.consentMarketing === true,
    sourceUrl,
    campaign: campaignFrom(body, sourceUrl),
  };
}

export function buildEvidenceRecord(
  request: NextRequest,
  fields: ConsentFields,
  payload: Record<string, unknown>,
): EvidenceRecord {
  const copy = getConsentCopy(fields.locale, fields.formId);
  const sourceUrl =
    fields.sourceUrl || request.headers.get("referer") || "https://ulpiano.es";
  const absolutePrivacy = `https://ulpiano.es${copy.privacyUrl}`;

  return {
    submission_id: crypto.randomUUID(),
    form_id: fields.formId,
    timestamp: madridTimestamp(),
    consent_processing: true,
    consent_marketing: fields.consentMarketing,
    consent_text_version: CONSENT_TEXT_VERSION,
    consent_text_shown: copy.processing,
    privacy_policy_version: `${PRIVACY_POLICY_VERSION} ${absolutePrivacy}`,
    locale: fields.locale,
    source_url: sourceUrl,
    campaign: fields.campaign,
    ip: firstForwardedIp(request.headers.get("x-forwarded-for")),
    user_agent: request.headers.get("user-agent") ?? "",
    payload,
  };
}
