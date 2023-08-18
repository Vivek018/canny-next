import { cachedClient } from "@/sanity/client.config";
import { Article, SidebarArticle } from "@/types";
import { groq } from "next-sanity";

export async function getArticle(slug: Article["slug"]): Promise<Article> {
  return cachedClient(
    groq`*[_type == "article" && slug.current == $slug] [0]{ 
      date, 
      title,
      "header": header.asset->url, 
      body, 
      "author": author->name,       
      "tags": tags[]->name
    }`,
    { slug }
  );
}

export async function getLatestArticles(): Promise<SidebarArticle[]> {
  return cachedClient(
    groq`*[_type == "article"] | order(date) [0...6] {
      _id, 
      title,
      "slug": slug.current,
    }`
  );
}

export async function getSidebarTagArticles(
  tag: Article["tags"][0]
): Promise<SidebarArticle[]> {
  return cachedClient(
    groq`*[_type == "article" && $tag in tags[]->name] | order(date) [0...6] {
      _id, 
      title,
      "slug": slug.current,
    }`,
    { tag }
  );
}
