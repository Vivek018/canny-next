import { Article, SidebarArticle } from "@/types";
import Link from "next/link";

type Props = {
  articles: SidebarArticle[];
  tag?: Article["tags"][0];
};

export function SidebarArticles({ articles, tag }: Props) {
  return (
    <div className='p-4 sm:p-6 lg:p-4 bg-muted flex flex-col items-start rounded-md gap-4 sm:gap-6 lg:gap-4 xs:text-lg sm:text-xl lg:text-base'>
      <h2 className='font-bold mb-2 lg:mb-1'>
        Latest {tag ? " in " + tag : "Articles"}
      </h2>
      {articles.map((article) => {
        return (
          <Link
            href={`/articles/${article?.slug}`}
            key={article?._id}
            className='hover:underline underline-offset-4 overflow-clip opacity-80'
          >
            {article?.title}
          </Link>
        );
      })}
    </div>
  );
}
