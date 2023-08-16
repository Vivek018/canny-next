"use client";

import { ArticleCard } from "./ArticleCard";
import { SearchFilter } from "./SearchFilter";
import { Pagination } from "./Pagination";
import { Article } from "@/types";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

type Props = {
  search: string;
  tag: string;
  page: number;
  articles: Article[];
  firstId: string;
  lastId: string;
};

export function Articles({
  articles,
  search,
  tag,
  page,
  firstId,
  lastId,
}: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isPending, startTransition] = useTransition();

  const [searchParam, setSearchParam] = useState(search);
  const [tagParam, setTagParam] = useState(tag);
  const [pageParam, setPageParam] = useState(page);

  const { debouncedValue: debouncedSearchParam, loading: isSearching } =
    useDebounce(searchParam);

  useEffect(() => {
    startTransition(() => {
      replace(
        `${pathname}?${pageParam ? "page=" + pageParam.toString() + "&" : ""}${
          debouncedSearchParam
            ? "search=" + debouncedSearchParam.replaceAll(" ", "+") + "&"
            : ""
        }${tagParam ? "tag=" + tagParam.replaceAll(" ", "+") : ""}`,
        {
          scroll: false,
        }
      );
    });
  }, [page, pageParam, pathname, replace, debouncedSearchParam, tagParam]);

  return (
    <>
      <SearchFilter
        isLoading={isPending || isSearching}
        search={searchParam}
        setSearch={setSearchParam}
        tag={tagParam}
        setTag={setTagParam}
        setPage={setPageParam}
      />
      <div className='grid auto-rows-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 my-10 md:my-20 place-items-center'>
        {articles?.map((article) => (
          <ArticleCard key={article?._id} article={article} />
        ))}
      </div>
      <Pagination
        page={pageParam}
        setPage={setPageParam}
        prevDisable={articles[0]?._id! === firstId! || isPending || isSearching}
        nextDisable={
          articles[articles?.length - 1]?._id! === lastId! ||
          isPending ||
          isSearching
        }
      />
    </>
  );
}
