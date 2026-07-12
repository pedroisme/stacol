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
    proof: string;
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
  proof: {
    title: string;
    subhead: string;
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
  footer: {
    rights: string;
  };
};

const zh: Dictionary = {
  meta: {
    title: "Stacol 安光油墨 | 环保印刷油墨",
    description:
      "Stacol 安光油墨，专注环保印刷油墨的研发与生产，提供免喷粉、低 VOC、UV 与专色定制解决方案。",
  },
  nav: {
    products: "产品",
    proof: "实力",
    about: "关于",
    contact: "联系",
    switchTo: "EN",
  },
  hero: {
    brand: "Stacol",
    brandSub: "安光油墨",
    headline: "让印刷更干净，也更可靠。",
    subhead:
      "从免喷粉、低 VOC 到 UV 与专色定制，为包装与出版印厂提供稳定可复的环保油墨。",
    ctaPrimary: "联系我们",
    ctaSecondary: "查看产品",
  },
  products: {
    title: "产品系列",
    subhead: "面向高速胶印与包装场景的环保油墨",
    items: [
      {
        id: "powder-free",
        name: "免喷粉油墨",
        blurb: "新一代免喷粉体系，减少粉尘与后道负担，让高速印刷更干净。",
      },
      {
        id: "low-voc",
        name: "低 VOC 油墨",
        blurb: "降低挥发性有机物，改善车间环境，契合绿色印刷要求。",
      },
      {
        id: "uv",
        name: "UV / LED-UV 油墨",
        blurb: "快速固化、色彩饱满，适合包装与特种印刷工序。",
      },
      {
        id: "spot-color",
        name: "专色定制",
        blurb: "按品牌色精确调配，帮助印厂稳定复现客户色彩。",
      },
    ],
  },
  proof: {
    title: "实力与认证",
    subhead: "以质量体系与环保认证，支撑长期合作",
  },
  about: {
    title: "关于安光",
    body: "天津安光油墨专注环保印刷油墨的研发、生产与服务。我们以 Stacol 品牌服务包装与出版印厂，追求稳定品质与更清洁的生产方式。",
  },
  certs: {
    title: "认证与荣誉",
    iso: "ISO 9001",
    env: "中国环境标志（十环）",
    award: "免喷粉优秀科技成果奖",
  },
  contact: {
    title: "联系我们",
    subhead: "咨询产品、打样或合作，欢迎来信",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    wechatLabel: "微信公众号",
  },
  footer: {
    rights: "Stacol 安光油墨",
  },
};

const en: Dictionary = {
  meta: {
    title: "Stacol | Environmental Printing Inks",
    description:
      "Stacol (Anguang Ink) develops environmental printing inks — powder-free, low-VOC, UV, and custom spot colors for packaging and publishing presses.",
  },
  nav: {
    products: "Products",
    proof: "Proof",
    about: "About",
    contact: "Contact",
    switchTo: "中文",
  },
  hero: {
    brand: "Stacol",
    brandSub: "Anguang Ink",
    headline: "Cleaner presses. Reliable color.",
    subhead:
      "Powder-free, low-VOC, UV, and custom spot-color inks for packaging and publishing printers who need stable quality and cleaner production.",
    ctaPrimary: "Contact us",
    ctaSecondary: "View products",
  },
  products: {
    title: "Product lines",
    subhead: "Environmental inks built for high-speed offset and packaging work",
    items: [
      {
        id: "powder-free",
        name: "Powder-free inks",
        blurb: "Next-generation powder-free systems that cut dust and finishing load on high-speed runs.",
      },
      {
        id: "low-voc",
        name: "Low-VOC inks",
        blurb: "Lower volatile organic compounds for greener pressrooms and cleaner working conditions.",
      },
      {
        id: "uv",
        name: "UV / LED-UV inks",
        blurb: "Fast curing and rich color for packaging and specialty print processes.",
      },
      {
        id: "spot-color",
        name: "Spot-color matching",
        blurb: "Precise brand-color formulation so printers can repeat customer colors with confidence.",
      },
    ],
  },
  proof: {
    title: "Capability & credentials",
    subhead: "Quality systems and environmental certifications that support long-term partnerships",
  },
  about: {
    title: "About Anguang",
    body: "Tianjin Anguang Ink develops, manufactures, and supports environmental printing inks. Under the Stacol brand, we serve packaging and publishing printers seeking stable quality and cleaner production.",
  },
  certs: {
    title: "Certifications & recognition",
    iso: "ISO 9001",
    env: "China Environmental Labeling",
    award: "Powder-free ink technology award",
  },
  contact: {
    title: "Contact",
    subhead: "Ask about products, samples, or partnership",
    phoneLabel: "Phone",
    emailLabel: "Email",
    wechatLabel: "WeChat",
  },
  footer: {
    rights: "Stacol Anguang Ink",
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
