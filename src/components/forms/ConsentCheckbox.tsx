"use client";

import Link from "next/link";
import { getConsentCopy, type FormId, type Locale } from "@/lib/legal/consent-texts";

const ERRORS = {
  es: "Debes aceptar la Política de Privacidad para enviar el formulario.",
  ca: "Has d'acceptar la Política de Privacitat per enviar el formulari.",
} as const;

type ConsentCheckboxProps = {
  locale: Locale;
  formId: FormId;
  showMarketing?: boolean;
  consentProcessing: boolean;
  consentMarketing: boolean;
  onProcessingChange: (value: boolean) => void;
  onMarketingChange: (value: boolean) => void;
  processingError: boolean;
};

function ProcessingLabel({ locale, formId }: { locale: Locale; formId: FormId }) {
  const copy = getConsentCopy(locale, formId);
  const parts = copy.processing.split(copy.privacyLinkLabel);

  return (
    <>
      {parts[0]}
      <Link
        href={copy.privacyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {copy.privacyLinkLabel}
      </Link>
      {parts.slice(1).join(copy.privacyLinkLabel)}
    </>
  );
}

export default function ConsentCheckbox({
  locale,
  formId,
  showMarketing = false,
  consentProcessing,
  consentMarketing,
  onProcessingChange,
  onMarketingChange,
  processingError,
}: ConsentCheckboxProps) {
  const copy = getConsentCopy(locale, formId);
  const errorId = `consent-processing-error-${formId}`;
  const processingId = `consent-processing-${formId}`;
  const marketingId = `consent-marketing-${formId}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <input
          id={processingId}
          name="consentProcessing"
          type="checkbox"
          required
          aria-required="true"
          aria-invalid={processingError ? "true" : "false"}
          aria-describedby={processingError ? errorId : undefined}
          checked={consentProcessing}
          onChange={(e) => onProcessingChange(e.target.checked)}
          style={{
            width: 24,
            height: 24,
            minWidth: 24,
            minHeight: 24,
            marginTop: 2,
            accentColor: "var(--ulpiano-green)",
            cursor: "pointer",
          }}
        />
        <label
          htmlFor={processingId}
          style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink)", cursor: "pointer" }}
        >
          <ProcessingLabel locale={locale} formId={formId} />
        </label>
      </div>
      {processingError && (
        <p id={errorId} role="alert" style={{ fontSize: 13, color: "var(--error)", lineHeight: 1.4 }}>
          {ERRORS[locale]}
        </p>
      )}
      {showMarketing && (
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input
            id={marketingId}
            name="consentMarketing"
            type="checkbox"
            checked={consentMarketing}
            onChange={(e) => onMarketingChange(e.target.checked)}
            style={{
              width: 24,
              height: 24,
              minWidth: 24,
              minHeight: 24,
              marginTop: 2,
              accentColor: "var(--ulpiano-green)",
              cursor: "pointer",
            }}
          />
          <label
            htmlFor={marketingId}
            style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink)", cursor: "pointer" }}
          >
            {copy.marketing}
          </label>
        </div>
      )}
    </div>
  );
}
