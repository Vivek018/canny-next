import { cachedClient } from "@/sanity/client.config";
import { Article } from "@/types";
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
