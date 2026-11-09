export type ContentType =
  | "historia"
  | "curiosidade"
  | "personalidade"
  | "tecnologia";

export type Reference = { label: string; url: string };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  type: ContentType;
  publishedAt: string;
  paragraphs: string[];
  references: Reference[];
};

export type ArticleSummary = Pick<
  Article,
  "slug" | "title" | "summary" | "type" | "publishedAt"
>;
