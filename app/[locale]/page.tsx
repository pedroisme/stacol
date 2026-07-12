import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import {
  contact,
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleHome({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="site-shell">
      <SiteHeader locale={locale} dict={dict} />

      <main>
        <section className="section hero" id="top">
          <div className="hero-brand-line">
            <strong>{dict.hero.brand}</strong>
            <span>{dict.hero.brandSub}</span>
          </div>
          <h1>{dict.hero.headline}</h1>
          <p>{dict.hero.subhead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              {dict.hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#products">
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="section" id="products">
          <h2>{dict.products.title}</h2>
          <p className="section-lead">{dict.products.subhead}</p>
          <div className="product-grid">
            {dict.products.items.map((item) => (
              <article className="product-item" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <h2>{dict.about.title}</h2>
          <p className="section-lead">{dict.about.body}</p>
        </section>

        <section className="section" id="contact">
          <h2>{dict.contact.title}</h2>
          <p className="section-lead">{dict.contact.subhead}</p>
          <ul className="contact-list">
            <li>
              {dict.contact.phoneLabel}:{" "}
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              {dict.contact.emailLabel}:{" "}
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        {"©"} {new Date().getFullYear()} Stacol {"安光油墨"}
      </footer>
    </div>
  );
}
