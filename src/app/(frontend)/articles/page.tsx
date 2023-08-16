import { getArticles, getFirstAndLastArticlesID } from "@/queries/articles";
import { Articles } from "./_components/Articles";
import { HeroSection } from "./_components/HeroSection";
import { Metadata } from "next";
import { articlesConfig } from "./_constants";

export const metadata: Metadata = {
  title: articlesConfig.name,
  description: articlesConfig.description,
  keywords: articlesConfig.keywords,
};

type Props = {
  searchParams: { search: string; page: string; tag: string };
};

export default async function ArticlesPage({ searchParams }: Props) {
  const search = searchParams.search ?? "";
  const tag = searchParams.tag ?? "";
  const page = Number.parseInt(searchParams.page ?? 0);
  const articles = await getArticles(search, tag, page);
  const { firstId, lastId } = await getFirstAndLastArticlesID(search, tag);

  return (
    <main>
      <HeroSection />
      <section className='bg-background w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden'>
        <h2 className='text-xl capitalize font-semibold tracking-wide w-full px-4'>
          All Articles
        </h2>
        <Articles
          articles={articles!}
          search={search}
          tag={tag}
          page={page}
          firstId={firstId?._id!}
          lastId={lastId?._id!}
        />
      </section>
    </main>
  );
}
