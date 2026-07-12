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
      className="text-sm tracking-wide text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
      hrefLang={nextLocale}
    >
      {label}
    </Link>
  );
}
