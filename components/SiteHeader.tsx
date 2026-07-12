import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { BrandMark } from "@/components/BrandMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  return (
    <header className="site-header site-header--overlay">
      <Link href={`/${locale}`} className="brand">
        <BrandMark />
        <span className="brand-text">
          <span className="brand-name">{dict.hero.brand}</span>
          <span className="brand-sub">{dict.hero.brandSub}</span>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <a href="#products">{dict.nav.products}</a>
        <a href="#proof">{dict.nav.proof}</a>
        <a href="#about">{dict.nav.about}</a>
        <a href="#contact">{dict.nav.contact}</a>
        <LanguageSwitcher locale={locale} label={dict.nav.switchTo} />
      </nav>
    </header>
  );
}
