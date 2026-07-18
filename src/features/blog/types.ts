export const blogCategories = [
  "Todos",
  "Derecho Civil",
  "Cataluña",
  "Procesos",
  "Tecnología",
  "IA",
  "Despachos",
  "Visión",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPostStatus = "published" | "coming-soon";

export type BlogPost = {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "Todos">;
  excerpt: string;
  readingTime: string;
  status: BlogPostStatus;
};
