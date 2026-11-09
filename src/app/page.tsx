import { Suspense } from "react";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/api";
import { CONTENT_TYPES, TYPE_LABELS } from "@/lib/format";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <section className="home">
      <header className="home-intro">
        <h1>ArcevoDev</h1>
        <p>
          Textos curtos e organizados sobre a história, as pessoas e as
          tecnologias que moldaram a computação.
        </p>
      </header>
      <Suspense fallback={<p className="loading">Carregando conteúdos...</p>}>
        <Catalog searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

async function Catalog({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const search = firstValue(params.search);
  const type = firstValue(params.type);
  const articles = await getArticles(search, type);

  return (
    <>
      <form className="filters" method="get">
        <div className="filter-field filter-search">
          <label htmlFor="search">Buscar</label>
          <input
            id="search"
            name="search"
            type="search"
            defaultValue={search ?? ""}
            placeholder="Título ou resumo"
          />
        </div>
        <div className="filter-field">
          <label htmlFor="type">Tipo</label>
          <select id="type" name="type" defaultValue={type ?? ""}>
            <option value="">Todos</option>
            {CONTENT_TYPES.map((contentType) => (
              <option key={contentType} value={contentType}>
                {TYPE_LABELS[contentType]}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Filtrar</button>
      </form>
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  );
}

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}
