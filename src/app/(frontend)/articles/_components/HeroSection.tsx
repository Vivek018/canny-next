import {
  getHeroSectionCategoryArticles,
  getHeroSectionMainArticle,
} from "@/queries/articles";
import { ArticleCard } from "./ArticleCard";

type Props = {};

export async function HeroSection({}: Props) {
  const mainArticle = await getHeroSectionMainArticle();
  const categoryArticles = await getHeroSectionCategoryArticles();

  return mainArticle ? (
    <section>
      <div className='h-full min-w-[10px] w-full top-0 left-1/2 right-1/2 absolute -translate-x-1/2 bg-article-background -z-50'></div>
      <div className='py-10 w-full bg-article-background overflow-hidden relative'>
        <AbsoluteBgClips />
        <div className='w-full flex flex-col items-center text-center px-4 mb-10 md:mb-20'>
          <span className='font-semibold text-xs capitalize z-10'>
            Our Articles
          </span>
          <h1 className='text-xl xs:text-2xl sm:text-3xl lg:text-4xl tracking-wider font-bold capitalize mt-6 z-10'>
            Trends & Techniques
          </h1>
          <p className='text-gray-500 text-sm mt-2 z-10'>
            Explore the evolving world of development and coding insights.
          </p>
        </div>
        <div className='w-full grid grid-row-2 lg:grid-row-1 grid-cols-1 lg:grid-cols-2 my-10 lg:px-20 mx-auto place-items-center gap-6'>
          <ArticleCard
            article={mainArticle}
            className='bg-background w-11/12 lg:w-full h-full border border-foreground text-foreground rounded-md p-4 max-w-2xl justify-between z-10'
            imageClassName='mb-6 rounded-md shadow-xl h-72 lg:h-96'
            bodyClassName='gap-4'
          />
          {categoryArticles ? (
            <div className='flex flex-col gap-6 justify-around items-start w-11/12 lg:w-full max-w-2xl h-full border border-foreground p-4 md:p-6 rounded-md bg-background text-foreground z-10'>
              <h2 className='mx-auto w-full text-xl font-bold tracking-wide'>
                Latest in Blender
              </h2>
              {categoryArticles?.map((article) => (
                <ArticleCard
                  key={article?._id}
                  article={article}
                  className='w-full max-w-full'
                  imageClassName='hidden'
                  bodyClassName='w-full gap-2'
                  tagsClassName='hidden'
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  ) : null;
}

export const AbsoluteBgClips = () => {
  return (
    <>
      <div className='w-9/12 rotate-[20deg] h-[400px] top-32 absolute bg-[#E4CCFF] dark:bg-[#352E52] rounded-full border-[0.25px] border-black -left-1/3 animate-in duration-500 ease-linear'></div>
      <div className='w-6/12 -rotate-[20deg] h-[400px] top-1/3 -right-1/4 absolute bg-[#FFF4D2] dark:bg-[#413D35] rounded-full border-[0.25px] border-black animate-in duration-500 ease-linear'></div>
    </>
  );
};
