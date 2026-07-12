import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: Props) {
  const nextLocale = locale === "zh" ? "en" : "zh";

  return (
    <Link
      href={`/${nextLocale}`}
      className="lang-switch"
      hrefLang={nextLocale}
    >
      {label}
    </Link>
  );
}
