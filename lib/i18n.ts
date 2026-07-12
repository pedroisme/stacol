export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type ProductItem = {
  id: "powder-free" | "low-voc" | "uv" | "spot-color";
  name: string;
  blurb: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    products: string;
    about: string;
    contact: string;
    switchTo: string;
  };
  hero: {
    brand: string;
    brandSub: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  products: {
    title: string;
    subhead: string;
    items: ProductItem[];
  };
  about: {
    title: string;
    body: string;
  };
  certs: {
    title: string;
    iso: string;
    env: string;
    award: string;
  };
  contact: {
    title: string;
    subhead: string;
    phoneLabel: string;
    emailLabel: string;
    wechatLabel: string;
  };
};

const zh: Dictionary = {
  meta: {
    title: "Stacol 安光油墨 | 环保印刷油墨",
    description:
      "Stacol 安光油墨 — 专业环保印刷油墨制造商，提供免喷粉、低 VOC、UV 与专色等解决方案。",
  },
  nav: {
    products: "产品",
    about: "关于我们",
    contact: "联系",
    switchTo: "EN",
  },
  hero: {
    brand: "Stacol",
    brandSub: "安光油墨",
    headline: "环保印刷油墨，服务全球印厂",
    subhead:
      "从免喷粉到低 VOC、UV 与专色定制，安光油墨以稳定品质与环保理念服务包装与出版印刷。",
    ctaPrimary: "联系我们",
    ctaSecondary: "查看产品",
  },
  products: {
    title: "核心产品",
    subhead: "面向胶印与包装场景的环保油墨系列",
    items: [
      { id: "powder-free", name: "免喷粉油墨", blurb: "高速印刷更干净，减少粉尘与后道负担。" },
      { id: "low-voc", name: "低 VOC 油墨", blurb: "降低挥发性有机物，契合绿色印刷要求。" },
      { id: "uv", name: "UV / LED-UV 油墨", blurb: "快速固化，适合包装与特种印刷。" },
      { id: "spot-color", name: "专色定制", blurb: "按品牌色精确调配，稳定可复现。" },
    ],
  },
  about: {
    title: "关于 Stacol 安光油墨",
    body: "天津安光油墨专注环保印刷油墨的研发、生产与服务，为包装与出版印厂提供稳定可靠的油墨方案。",
  },
  certs: {
    title: "资质与认证",
    iso: "ISO 9001",
    env: "中国环境标志（十环）",
    award: "免喷粉优秀科技成果奖",
  },
  contact: {
    title: "联系我们",
    subhead: "欢迎咨询产品与合作事宜",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    wechatLabel: "微信公众号",
  },
};

const en: Dictionary = {
  meta: {
    title: "Stacol | Environmental Printing Inks",
    description:
      "Stacol (Anguang Ink) — environmental printing inks for packaging and publishing, including powder-free, low-VOC, UV, and spot-color solutions.",
  },
  nav: {
    products: "Products",
    about: "About",
    contact: "Contact",
    switchTo: "中文",
  },
  hero: {
    brand: "Stacol",
    brandSub: "Anguang Ink",
    headline: "Environmental printing inks for modern presses",
    subhead:
      "From powder-free and low-VOC systems to UV and custom spot colors — built for packaging and publishing printers who care about quality and cleaner production.",
    ctaPrimary: "Contact us",
    ctaSecondary: "View products",
  },
  products: {
    title: "Products",
    subhead: "Environmental ink lines for offset and packaging presses",
    items: [
      { id: "powder-free", name: "Powder-free inks", blurb: "Cleaner high-speed runs with less dust and finishing load." },
      { id: "low-voc", name: "Low-VOC inks", blurb: "Lower volatile organic compounds for greener print rooms." },
      { id: "uv", name: "UV / LED-UV inks", blurb: "Fast curing for packaging and specialty work." },
      { id: "spot-color", name: "Spot-color matching", blurb: "Precise brand-color formulation you can repeat." },
    ],
  },
  about: {
    title: "About Stacol",
    body: "Tianjin Anguang Ink develops, manufactures, and supports environmental printing inks for packaging and publishing printers worldwide.",
  },
  certs: {
    title: "Credentials",
    iso: "ISO 9001",
    env: "China Environmental Labeling",
    award: "Powder-free ink technology award",
  },
  contact: {
    title: "Contact",
    subhead: "Reach out for products and partnerships",
    phoneLabel: "Phone",
    emailLabel: "Email",
    wechatLabel: "WeChat",
  },
};

const dictionaries: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const contact = {
  phone: "7166031598",
  phoneHref: "tel:+17166031598",
  email: "yasuozy17@gmail.com",
  emailHref: "mailto:yasuozy17@gmail.com",
};
