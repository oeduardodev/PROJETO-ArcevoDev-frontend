import type { Article, ArticleSummary } from "./types";

const API_BASE_URL =
  process.env.API_BASE_URL ?? "http://localhost:3001/api";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message = "Não foi possível carregar os conteúdos.",
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function getArticles(
  search?: string,
  type?: string,
): Promise<ArticleSummary[]> {
  const params = new URLSearchParams();
  const term = search?.trim();

  if (term) {
    params.set("search", term);
  }

  if (type) {
    params.set("type", type);
  }

  const query = params.toString();
  const url = `${API_BASE_URL}/articles${query ? `?${query}` : ""}`;
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  return (await response.json()) as ArticleSummary[];
}

export async function getArticle(slug: string): Promise<Article | null> {
  const response = await fetch(
    `${API_BASE_URL}/articles/${encodeURIComponent(slug)}`,
    { cache: "no-store" },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  return (await response.json()) as Article;
}
