"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPostsCa } from "./data.ca";
import { blogCategoriesCa, type BlogCategoryCa, type BlogPostCa } from "./data.ca";

function matchesSearch(post: BlogPostCa, searchTerm: string) {
  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase("ca-ES");

  if (!normalizedSearchTerm) {
    return true;
  }

  return [post.title, post.category, post.excerpt].some((value) =>
    value.toLocaleLowerCase("ca-ES").includes(normalizedSearchTerm),
  );
}

function CategoryFilter({
  category,
  isSelected,
  onSelect,
}: {
  category: BlogCategoryCa;
  isSelected: boolean;
  onSelect: (category: BlogCategoryCa) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category)}
      aria-pressed={isSelected}
      className={`min-h-11 shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ulpiano-green ${
        isSelected
          ? "border-night bg-night text-white"
          : "border-mist bg-white text-slate hover:border-fog hover:text-ink"
      }`}
    >
      {category}
    </button>
  );
}

function ArticleCard({ post }: { post: BlogPostCa }) {
  const isPublished = post.status === "published";
  const content = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="badge">{post.category}</span>
        {isPublished ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate">
            <Clock3 aria-hidden="true" size={14} />
            {post.readingTime}
          </span>
        ) : (
          <span className="rounded-md bg-warning-bg px-3 py-1 text-xs font-semibold text-warning">
            Pròximament
          </span>
        )}
      </div>
      {isPublished && (
        <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.06em] text-ulpiano-green">
          Acabat de publicar
        </span>
      )}
      <h3 className="mt-3 text-xl font-semibold text-ink">{post.title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-slate">{post.excerpt}</p>
      {isPublished && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green">
          Llegir article
          <ArrowRight aria-hidden="true" size={16} />
        </span>
      )}
    </>
  );

  if (!isPublished) {
    return (
      <article
        className="flex h-full flex-col rounded-lg border border-mist border-t-2 border-t-mist bg-surface p-6 opacity-70 shadow-card lg:p-8"
        aria-label={`${post.title}. Pròximament.`}
      >
        {content}
      </article>
    );
  }

  return (
    <Link
      href={`/ca/recursos/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-mist border-t-2 border-t-ulpiano-green bg-white p-6 text-left no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green lg:p-8"
      aria-label={`Llegir l'article: ${post.title}`}
    >
      {content}
    </Link>
  );
}

export default function BlogIndexCa() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryCa>("Tots");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(
    () =>
      blogPostsCa.filter(
        (post) =>
          (selectedCategory === "Tots" || post.category === selectedCategory) &&
          matchesSearch(post, searchTerm),
      ),
    [searchTerm, selectedCategory],
  );

  return (
    <main style={{ paddingTop: "calc(64px + var(--space-16))", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: "var(--space-14)" }}>
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: "var(--space-4)" }}>
            BLOG
          </div>
          <h1 className="h1" style={{ color: "var(--ink)" }}>
            Idees i criteri per gestionar herències
          </h1>
          <p className="body-lg" style={{ color: "var(--slate)", marginTop: "var(--space-6)" }}>
            Dret successori, pràctica professional i tecnologia explicats amb
            claredat per treballar millor cada expedient.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Filtrar articles per categoria"
          >
            {blogCategoriesCa.map((category) => (
              <CategoryFilter
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onSelect={setSelectedCategory}
              />
            ))}
          </div>

          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Cercar articles</span>
            <Search
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate"
            />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Cercar per tema"
              className="min-h-11 w-full rounded-md border border-mist bg-white py-2 pl-11 pr-4 text-base text-ink outline-none transition-colors placeholder:text-fog focus:border-ulpiano-green focus:ring-2 focus:ring-green-bg"
            />
          </label>
        </div>

        <p className="mt-6 text-sm text-slate" aria-live="polite">
          {filteredPosts.length === 1
            ? "1 article trobat"
            : `${filteredPosts.length} articles trobats`}
        </p>

        {filteredPosts.length > 0 ? (
          <div
            id="blog-grid"
            className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-lg border border-mist bg-surface p-8 text-center">
            <p className="font-medium text-ink">No hem trobat articles amb aquesta cerca.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tots");
                setSearchTerm("");
              }}
              className="mt-3 text-sm font-semibold text-ulpiano-green underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ulpiano-green"
            >
              Restablir filtres
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
