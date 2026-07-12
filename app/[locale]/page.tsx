import Image from "next/image";
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
import { images } from "@/lib/images";

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
        <section className="hero-full" id="top">
          <Image
            src={images.hero}
            alt=""
            fill
            priority
            className="hero-full-image"
            sizes="100vw"
          />
          <div className="hero-full-scrim" />
          <div className="hero-full-content">
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
          </div>
        </section>

        <section className="section" id="products">
          <h2>{dict.products.title}</h2>
          <p className="section-lead">{dict.products.subhead}</p>
          <div className="product-grid">
            {dict.products.items.map((item) => (
              <article className="product-item" key={item.id}>
                <div className="product-media">
                  <Image
                    src={images.products[item.id]}
                    alt={item.name}
                    width={700}
                    height={430}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <h2>{dict.about.title}</h2>
          <p className="section-lead">{dict.about.body}</p>
          <div className="about-media">
            <Image
              src={images.about.factory}
              alt={dict.about.title}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
          <div className="cert-row" aria-label={dict.certs.title}>
            <figure>
              <Image src={images.certs.iso} alt={dict.certs.iso} width={400} height={560} />
              <figcaption>{dict.certs.iso}</figcaption>
            </figure>
            <figure>
              <Image src={images.certs.env} alt={dict.certs.env} width={400} height={560} />
              <figcaption>{dict.certs.env}</figcaption>
            </figure>
            <figure>
              <Image src={images.certs.award} alt={dict.certs.award} width={400} height={560} />
              <figcaption>{dict.certs.award}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="contact">
          <h2>{dict.contact.title}</h2>
          <p className="section-lead">{dict.contact.subhead}</p>
          <div className="contact-grid">
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
            <figure className="wechat-block">
              <Image
                src={images.wechatQr}
                alt={dict.contact.wechatLabel}
                width={180}
                height={180}
              />
              <figcaption>{dict.contact.wechatLabel}</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        {"©"} {new Date().getFullYear()} Stacol {"安光油墨"}
      </footer>
    </div>
  );
}
