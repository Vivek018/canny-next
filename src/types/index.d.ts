export type LandingPageRoutes =
  | "Why Us"
  | "Portfolio"
  | "Tech Stack"
  | "Services";

export type ServicePageRoutes =
  | "epic-website"
  | "saas"
  | "cms"
  | "consulting"
  | "ecommerce";

export type TechStackTypes =
  | "ReactJS"
  | "NextJS"
  | "Vercel"
  | "Supabase"
  | "Firebase"
  | "Sanity"
  | "Stripe"
  | "Shopify"
  | "Custom";

export type Author = {
  aun: string;
  name: string;
};

export type Tag = Omit<Author, "aun"> & { tun: string };

export type Article = {
  _id: string;
  slug: string;
  date: string;
  header: string;
  body?: any;
  title: string;
  author: string;
  tags: string[];
};

export type SidebarArticle = Pick<Article, "_id" | "title" | "slug">;

export type EmailForm = {
  name?: string;
  email: string;
  subject: string;
  message: string;
};
