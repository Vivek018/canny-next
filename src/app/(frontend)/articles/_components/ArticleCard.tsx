import { Article } from "@/types";
import { cn } from "@/libs/cn";
import Image from "next/image";
import Link from "next/link";

type Props = {
  article: Article;
  className?: string;
  imageClassName?: string;
  bodyClassName?: string;
  tagsClassName?: string;
};

export function ArticleCard({
  article,
  className,
  imageClassName,
  bodyClassName,
  tagsClassName,
}: Props) {
  return article ? (
    <Link
      href='articles'
      className={cn(
        "w-11/12 max-w-sm rounded-lg overflow-hidden flex flex-col shadow-sm hover:brightness-95 dark:hover:brightness-105 transition bg-muted text-muted-foreground",
        className
      )}
    >
      <Image
        src={article?.header}
        alt={article?.title}
        width='200'
        height='100'
        className={cn("w-full h-60 bg-background", imageClassName)}
      />
      <div
        className={cn(
          "px-3 py-4 flex flex-col gap-5 rounded-b-lg justify-around",
          bodyClassName
        )}
      >
        <h3 className='truncate font-semibold text-lg'>{article?.title}</h3>
        <div className='flex justify-between'>
          <p className='text-xs text-gray'>{article?.date}</p>
          <p className='text-xs text-gray capitalize'>{article?.author}</p>
        </div>
        <span
          className={cn("w-full h-[1px] bg-muted-foreground", tagsClassName)}
        ></span>
        <div className={cn("h-auto overflow-ellipsis", tagsClassName)}>
          {article?.tags?.map((tag, index) => (
            <span
              key={index}
              className='inline-block text-[10px] py-1 px-2 rounded-full bg-accent text-white mr-2 mt-1'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  ) : null;
}
