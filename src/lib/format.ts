import type { ContentType } from "./types";

export const CONTENT_TYPES: ContentType[] = [
  "historia",
  "curiosidade",
  "personalidade",
  "tecnologia",
];

export const TYPE_LABELS: Record<ContentType, string> = {
  historia: "História",
  curiosidade: "Curiosidade",
  personalidade: "Personalidade",
  tecnologia: "Tecnologia",
};

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
