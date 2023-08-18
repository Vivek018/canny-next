import { getArticle } from "@/queries/article";
import { Article as ArticleType } from "@/types";
import { Article } from "./_components/Article";
import { Metadata } from "next";

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
      title: article?.title,
      images: [article?.header],
    },
  };
}

export default async function layout({ params: { slug } }: Props) {
  const article = await getArticle(slug);
  return (
    <main className='flex w-full gap-2 h-full pt-20 relative'>
      <section className='w-[75%] py-20'>
        <Article article={article} />
      </section>
      <section className='fixed overflow-scroll right-0 w-[25%] h-full px-6 py-20'>
        <div className="">

        </div>
      </section>
    </main>
  );
}
