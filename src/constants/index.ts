import { SiteConfig } from "@/types";

export const primaryColor = "#3788a7";

export const siteConfig: SiteConfig = Object.freeze({
  name: "Canny Next: Next Gen Website Production",
  description:
    "Canny Management specializes in providing a wide range of Manpower Services, including Labor Manpower Services and Construction Workers Manpower Services. We operate throughout India, with a particular focus on Gujarat, Ahmedabad, Vadodara, Baroda, Gandhidham, Porbander, Odisha, Tamil Nadu, Karnataka, and West Bengal.",
  url: "https://www.cannynext.com",
  ogImage: "https://www.cannynext.com/canny_next.png",
  keywords: [
    "Skilled Labour services",
    "Semi skilled Labour services",
    "Unskilled Labour services",
    "Labour agency",
    "Labour agency in Ahmedabad",
    "Labour agency in Gujarat",
    "Labour agency in India",
    "Manpower services",
    "Manpower agency",
    "Manpower agency in Ahmedabad",
    "Manpower agency in Gujarat",
    "Manpower agency in India",
  ],
  icons: {
    icon: "canny_next.svg",
  },
  links: {
    linkedIn: "https://in.linkedin.com/company/canny-next",
    twitter: "https://in.twitter.com/canny-next",
  },
});

export const landingPageRoutes = [
  { title: "Why Us", slug: "why-us" },
  { title: "Services", slug: "services" },
  { title: "Tech Stack", slug: "tech-stack" },
  { title: "Portfolio", slug: "portfolio" },
];

export const servicesRoutes = [
  { title: "Epic Website", slug: "epic-website", className: "bg-card-1" },
  { title: "SAAS", slug: "saas", className: "bg-card-2" },
  { title: "Ecommerce", slug: "ecommerce", className: "bg-card-3" },
  { title: "Consulting", slug: "consulting", className: "bg-card-4" },
  { title: "CMS", slug: "cms", className: "bg-card-5" },
];

export const routes = Object.freeze({
  articles: "/articles",
  whyUS: "/why-us",
  services: "/services",
  techStack: "/tech-stack",
  portfolio: "/portfolio",
  contact: "/contact",
});

export const tags = [
  "React",
  "React Three Fiber",
  "Blender",
  "Framer Motion",
  "ThreeJS",
  "WebGL",
];

export const pageLimit = 3;
