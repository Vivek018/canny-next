"use client";

import { Article } from "@/types";
import { useEffect, useRef } from "react";

export function useSideNumbers(articleBody: Article["body"]) {
  const sideNumbers = useRef<number[]>([]);

  useEffect(() => {
    if (sideNumbers.current.length <= 5)
      articleBody.map((content: any) => {
        if (content.style === "h3") {
          if (!sideNumbers.current.includes(content._key))
            sideNumbers.current.push(content._key);
        }
      });
    else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { sideNumbers: sideNumbers.current };
}
