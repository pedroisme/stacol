import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { images } from "@/lib/images";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  return (
    <header className="site-header site-header--overlay">
      <Link href={`/${locale}`} className="brand" aria-label={`${dict.hero.brand} ${dict.hero.brandSub}`}>
        <Image
          src={images.logo}
          alt={`${dict.hero.brand} ${dict.hero.brandSub}`}
          width={120}
          height={116}
          className="brand-logo"
          priority
        />
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
