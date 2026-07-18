"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts } from "./data";
import { blogCategories, type BlogCategory, type BlogPost } from "./types";

const featuredPost = blogPosts.find((post) => post.status === "published");

function matchesSearch(post: BlogPost, searchTerm: string) {
  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase("es-ES");

  if (!normalizedSearchTerm) {
    return true;
  }

  return [post.title, post.category, post.excerpt].some((value) =>
    value.toLocaleLowerCase("es-ES").includes(normalizedSearchTerm),
  );
}

function CategoryFilter({
  category,
  isSelected,
  onSelect,
}: {
  category: BlogCategory;
  isSelected: boolean;
  onSelect: (category: BlogCategory) => void;
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

function ArticleCard({ post }: { post: BlogPost }) {
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
            Próximamente
          </span>
        )}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{post.title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-slate">{post.excerpt}</p>
      {isPublished && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ulpiano-green">
          Leer artículo
          <ArrowRight aria-hidden="true" size={16} />
        </span>
      )}
    </>
  );

  if (!isPublished) {
    return (
      <article
        className="flex h-full flex-col rounded-lg border border-mist border-t-2 border-t-mist bg-surface p-6 opacity-70 shadow-card lg:p-8"
        aria-label={`${post.title}. Próximamente.`}
      >
        {content}
      </article>
    );
  }

  return (
    <Link
      href={`/recursos/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-mist border-t-2 border-t-ulpiano-green bg-white p-6 text-left no-underline shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ulpiano-green lg:p-8"
      aria-label={`Leer el artículo: ${post.title}`}
    >
      {content}
    </Link>
  );
}

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter(
        (post) =>
          (selectedCategory === "Todos" || post.category === selectedCategory) &&
          matchesSearch(post, searchTerm),
      ),
    [searchTerm, selectedCategory],
  );

  if (!featuredPost) {
    return null;
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-night pb-28 pt-[calc(64px+4rem)] text-white md:pb-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-ulpiano-green opacity-20 blur-[140px]"
        />
        <div className="container relative z-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-green-light/60" />
            <p className="eyebrow text-green-light">Blog de Ulpiano</p>
            <span className="h-px w-8 bg-green-light/60" />
          </div>
          <h1 className="mx-auto mt-7 max-w-4xl font-dm-sans text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[56px]">
            Ideas y criterio para gestionar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light to-ulpiano-green">
              herencias
            </span>
          </h1>
          <p className="body-lg mx-auto mt-7 max-w-2xl text-white/70">
            Derecho sucesorio, práctica profesional y tecnología explicados con
            claridad para trabajar mejor cada expediente.
          </p>
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-6 border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
            <span>Derecho</span>
            <span className="h-1 w-1 rounded-full bg-green-light" />
            <span>Proceso</span>
            <span className="h-1 w-1 rounded-full bg-green-light" />
            <span>Tecnología</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 bg-surface pb-16 md:pb-20">
        <div className="container">
          <div className="grid gap-8 rounded-xl border border-mist bg-white p-6 shadow-card lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge">{featuredPost.category}</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                  <Clock3 aria-hidden="true" size={16} />
                  {featuredPost.readingTime}
                </span>
              </div>
              <p className="eyebrow mt-7 text-slate">Artículo destacado</p>
              <h2 className="h2 mt-3 max-w-2xl text-ink">{featuredPost.title}</h2>
              <p className="body-lg mt-5 max-w-2xl text-slate">{featuredPost.excerpt}</p>
              <Link
                href={`/recursos/blog/${featuredPost.slug}`}
                className="btn-primary mt-7 min-h-11 gap-2 text-sm"
              >
                Leer artículo
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-night p-7 text-white lg:p-8">
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-10 font-dm-sans text-[140px] font-bold leading-none text-white/[0.06]"
              >
                01
              </span>
              <div className="relative">
                <p className="eyebrow text-green-light">Publicado ahora</p>
                <p className="mt-5 font-dm-sans text-3xl font-bold tracking-tight">Una lectura esencial</p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  La legítima catalana, el artículo 451-5 CCCat y los errores que
                  una validación de proceso puede evitar antes de firmar.
                </p>
                <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/50">
                  Próximamente: 7 nuevos artículos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-slate">Todos los artículos</p>
              <h2 className="h2 mt-3 text-ink">Explora el conocimiento de Ulpiano</h2>
            </div>
            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Buscar artículos</span>
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar por tema"
                className="min-h-11 w-full rounded-md border border-mist bg-white py-2 pl-11 pr-4 text-base text-ink outline-none transition-colors placeholder:text-fog focus:border-ulpiano-green focus:ring-2 focus:ring-green-bg"
              />
            </label>
          </div>

          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-2"
            role="group"
            aria-label="Filtrar artículos por categoría"
          >
            {blogCategories.map((category) => (
              <CategoryFilter
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onSelect={setSelectedCategory}
              />
            ))}
          </div>

          <p className="mt-8 text-sm text-slate" aria-live="polite">
            {filteredPosts.length === 1
              ? "1 artículo encontrado"
              : `${filteredPosts.length} artículos encontrados`}
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
              <p className="font-medium text-ink">No hemos encontrado artículos con esa búsqueda.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchTerm("");
                }}
                className="mt-3 text-sm font-semibold text-ulpiano-green underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ulpiano-green"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
