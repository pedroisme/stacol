# Stacol / 安光油墨

Company website for **Stacol (安光油墨)** — environmental printing inks.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default locale is Chinese (`/zh`); English is at `/en`.

## Locales

| Path | Language |
|------|----------|
| `/zh` | 中文 |
| `/en` | English |

Copy lives in `lib/i18n.ts`. Image paths live in `lib/images.ts`.

## Contact (site)

- Phone: 7166031598
- Email: yasuozy17@gmail.com

## Web images (`public/images/`)

Selected and compressed from company catalogs (RGB JPEG + WebP):

| Path | Use |
|------|-----|
| `hero/press.jpg` | Full-bleed hero (press in motion) |
| `products/powder-free.jpg` | Powder-free / 免喷粉 |
| `products/low-voc.jpg` | Low-VOC |
| `products/uv.jpg` | LED-UV |
| `products/spot-color.jpg` | Spot-color visual |
| `about/factory-hq.jpg` | HQ building with 安光油墨 signage |
| `certs/*` | ISO 9001, China Environmental Label, award |
| `wechat-qr.jpg` | WeChat official account QR |

Raw catalog / PSD / AI files stay **out of git** (see `.gitignore`).
