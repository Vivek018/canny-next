import {
  getArticle,
  getLatestArticles,
  getSidebarTagArticles,
} from "@/queries/article";
import { Article as ArticleType } from "@/types";
import { Article } from "./_components/Article";
import { Metadata } from "next";
import { SidebarArticles } from "./_components/SidebarArticles";
import { siteConfig } from "../../_constants";

type Props = {
  params: {
    slug: ArticleType["slug"];
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const article = await getArticle(slug);
  return {
    title: article?.title,
    openGraph: {
      siteName: siteConfig.name,
      title: article?.title,
      images: [article?.header],
      type: "website",
      locale: "en_US",
      url: siteConfig.url + `/articles/${slug}`,
      description: siteConfig.description,
    },
  };
}

export default async function ArticlePage({ params: { slug } }: Props) {
  const article = await getArticle(slug);
  const tag = article.tags[0];
  const sidebarArticles = await getSidebarTagArticles(tag);
  const latestArticles = await getLatestArticles();

  return (
    <main className='flex flex-col lg:flex-row w-full gap-2 h-full pt-20 relative'>
      <section className='lg:w-[75%] py-10'>
        <Article article={article} />
      </section>
      <section className='flex-1 lg:fixed overflow-scroll right-0 lg:w-[25%] h-full px-6 md:ml-28 lg:ml-0 py-10 flex flex-col gap-10'>
        <SidebarArticles articles={sidebarArticles} tag={tag} />
        <SidebarArticles articles={latestArticles} />
      </section>
    </main>
  );
}
