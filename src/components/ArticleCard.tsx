import Link from "next/link";
import type { ArticleSummary } from "@/lib/types";
import { formatDate, TYPE_LABELS } from "@/lib/format";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <article className="article-card">
      <Link href={`/conteudos/${article.slug}`} className="article-card-link">
        <span className={`badge badge-${article.type}`}>
          {TYPE_LABELS[article.type]}
        </span>
        <h2 className="article-card-title">{article.title}</h2>
        <p className="article-card-summary">{article.summary}</p>
        <time className="article-card-date" dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
      </Link>
    </article>
  );
}
