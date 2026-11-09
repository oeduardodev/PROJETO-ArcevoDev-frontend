import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcevoDev",
  description:
    "Acervo público e gratuito com textos curtos sobre o universo da tecnologia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              ArcevoDev
            </Link>
          </div>
        </header>
        <main className="container page">{children}</main>
        <footer className="site-footer">
          <div className="container">
            Acervo público e gratuito sobre tecnologia.
          </div>
        </footer>
      </body>
    </html>
  );
}
