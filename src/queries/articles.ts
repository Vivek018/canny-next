import { pageLimit } from "./../constants/index";
import { cachedClient } from "@/sanity/client.config";
import { Article } from "@/types";
import { groq } from "next-sanity";

export async function getHeroSectionMainArticle(): Promise<Article> {
  return cachedClient(
    groq`*[_type == "article"]| order(date) [0] {
      _id, 
      title,
      "slug": slug.current, 
      date, 
      "header": header.asset->url, 
      "author": author->name,       
      "tags": tags[]->name
    }`
  );
}

export async function getHeroSectionCategoryArticles(): Promise<Article[]> {
  return cachedClient(
    groq`*[_type == "article" && 'Blender' in tags[]->name] | order(date) [0...5] {
      _id, 
      title,
      "slug": slug.current, 
      date, 
      "header": header.asset->url, 
      "author": author->name
    }`
  );
}

export async function getFirstAndLastArticlesID(
  search: string,
  tag: string
): Promise<{
  firstId: { _id: Article["_id"] };
  lastId: { _id: Article["_id"] };
}> {
  return cachedClient(
    groq`{
      "firstId": *[_type == "article" && ([title, slug.current, author->name] match $search + "*") && (tags[]->name match $tag + "*")] | order(date) [0] {_id},
      "lastId": *[_type == "article" && ([title, slug.current, author->name] match $search + "*") && (tags[]->name match $tag + "*")] | order(date) [-1] {_id}
    }`,
    { search, tag }
  );
}

export async function getArticles(
  search: string,
  tag: string,
  page: number
): Promise<Article[]> {
  return cachedClient(
    groq`*[_type == "article" && ([title, slug.current, author->name] match $search + "*") && (tags[]->name match $tag + "*")] | order(date) [$prev...$next] {
      _id, 
      title,
      "slug": slug.current, 
      date, 
      "header": header.asset->url, 
      "author": author->name,       
      "tags": tags[]->name
    }`,
    { tag, search, prev: page * pageLimit, next: page * pageLimit + pageLimit }
  );
}