import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  return (
    <header className="site-header">
      <Link href={`/${locale}`} className="brand">
        <span className="brand-name">{dict.hero.brand}</span>
        <span className="brand-sub">{dict.hero.brandSub}</span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <a href="#products">{dict.nav.products}</a>
        <a href="#about">{dict.nav.about}</a>
        <a href="#contact">{dict.nav.contact}</a>
        <LanguageSwitcher locale={locale} label={dict.nav.switchTo} />
      </nav>
    </header>
  );
}
