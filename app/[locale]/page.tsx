import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BrandMark } from "@/components/BrandMark";
import { HtmlLang } from "@/components/HtmlLang";
import { Reveal } from "@/components/Reveal";
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
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: images.og }],
      locale: raw === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [images.og],
    },
  };
}

export default async function LocaleHome({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <div className="site-shell">
      <HtmlLang locale={locale} />
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
            <p className="hero-brand-line animate-in">
              <BrandMark />
              <strong>{dict.hero.brand}</strong>
              <span>{dict.hero.brandSub}</span>
            </p>
            <h1 className="animate-in animate-in-delay-1">{dict.hero.headline}</h1>
            <p className="hero-copy animate-in animate-in-delay-2">
              {dict.hero.subhead}
            </p>
            <div className="hero-actions animate-in animate-in-delay-3">
              <a className="btn btn-primary" href="#contact">
                {dict.hero.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="#products">
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="section section-products" id="products">
          <Reveal>
            <h2>{dict.products.title}</h2>
            <p className="section-lead">{dict.products.subhead}</p>
          </Reveal>
          <div className="product-features">
            {dict.products.items.map((item, index) => (
              <Reveal key={item.id}>
                <article
                  className={`product-feature${index % 2 === 1 ? " product-feature--flip" : ""}`}
                >
                  <div className="product-feature-media">
                    <Image
                      src={images.products[item.id]}
                      alt={item.name}
                      width={900}
                      height={560}
                      sizes="(max-width: 900px) 100vw, 48vw"
                    />
                  </div>
                  <div className="product-feature-copy">
                    <h3>{item.name}</h3>
                    <p>{item.blurb}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section-proof" id="proof">
          <Reveal>
            <h2>{dict.proof.title}</h2>
            <p className="section-lead">{dict.proof.subhead}</p>
          </Reveal>
          <Reveal>
            <div className="proof-factory">
              <Image
                src={images.about.factory}
                alt={dict.about.title}
                width={1400}
                height={900}
                sizes="100vw"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="cert-row" aria-label={dict.certs.title}>
              <figure>
                <Image
                  src={images.certs.iso}
                  alt={dict.certs.iso}
                  width={420}
                  height={580}
                />
                <figcaption>{dict.certs.iso}</figcaption>
              </figure>
              <figure>
                <Image
                  src={images.certs.env}
                  alt={dict.certs.env}
                  width={420}
                  height={580}
                />
                <figcaption>{dict.certs.env}</figcaption>
              </figure>
              <figure>
                <Image
                  src={images.certs.award}
                  alt={dict.certs.award}
                  width={420}
                  height={580}
                />
                <figcaption>{dict.certs.award}</figcaption>
              </figure>
            </div>
          </Reveal>
        </section>

        <section className="section section-about" id="about">
          <Reveal>
            <div className="about-split">
              <div>
                <h2>{dict.about.title}</h2>
                <p className="section-lead">{dict.about.body}</p>
              </div>
              <div className="about-side-media">
                <Image
                  src={images.products.lineup}
                  alt={dict.products.title}
                  width={700}
                  height={520}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section section-contact" id="contact">
          <Reveal>
            <h2>{dict.contact.title}</h2>
            <p className="section-lead">{dict.contact.subhead}</p>
            <div className="contact-grid">
              <ul className="contact-list">
                <li>
                  <span>{dict.contact.phoneLabel}</span>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li>
                  <span>{dict.contact.emailLabel}</span>
                  <a href={contact.emailHref}>{contact.email}</a>
                </li>
              </ul>
              <figure className="wechat-block">
                <Image
                  src={images.wechatQr}
                  alt={dict.contact.wechatLabel}
                  width={168}
                  height={168}
                />
                <figcaption>{dict.contact.wechatLabel}</figcaption>
              </figure>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark />
        <p>
          {"©"} {new Date().getFullYear()} {dict.footer.rights}
        </p>
      </footer>
    </div>
  );
}
