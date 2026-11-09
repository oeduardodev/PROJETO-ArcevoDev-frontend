import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/api";
import { formatDate, TYPE_LABELS } from "@/lib/format";

type Params = Promise<{ slug: string }>;

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-detail">
      <Link href="/" className="back-link">
        ← Voltar ao início
      </Link>
      <header className="article-header">
        <span className={`badge badge-${article.type}`}>
          {TYPE_LABELS[article.type]}
        </span>
        <h1>{article.title}</h1>
        <time dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
      </header>
      <p className="article-summary">{article.summary}</p>
      <div className="article-body">
        {article.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {article.references.length > 0 ? (
        <section className="article-references">
          <h2>Referências</h2>
          <ul>
            {article.references.map((reference) => (
              <li key={reference.url}>
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
