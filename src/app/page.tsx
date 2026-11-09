import { Suspense } from "react";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/api";

export default function Home() {
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
        <ArticleList />
      </Suspense>
    </section>
  );
}

async function ArticleList() {
  const articles = await getArticles();

  return (
    <div className="article-grid">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
