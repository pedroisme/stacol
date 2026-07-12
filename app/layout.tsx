import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const body = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const displayZh = Noto_Serif_SC({
  variable: "--font-display-zh",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const displayEn = Source_Serif_4({
  variable: "--font-display-en",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Stacol 安光油墨",
    template: "%s | Stacol",
  },
  description: "Stacol / Anguang Ink — environmental printing inks",
  metadataBase: new URL("https://inkstacol.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${body.variable} ${displayZh.variable} ${displayEn.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={
          {
            "--font-display":
              "var(--font-display-en), var(--font-display-zh), Georgia, serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
