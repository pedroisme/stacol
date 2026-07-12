"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function HtmlLang({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
