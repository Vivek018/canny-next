import { getArticle } from "@/queries/article";
import { Article } from "@/types";

type Props = {
  params: {
    slug: Article["slug"];
  };
};

export default async function ArticlePage({ params: { slug } }: Props) {
  const article = await getArticle(slug);
  console.log(article);


  return <main>page</main>;
}

// {
//   date: '2020-07-09',
//   header: 'https://cdn.sanity.io/images/neghpa2h/production/f032e4cdd9e9cf43a35220e49bfc380dd04ba345-800x533.jpg',
//   body: [
//     {
//       _key: 'd98edf029d85',
//       markDefs: [],
//       children: [Array],
//       _type: 'block',
//       style: 'h3'
//     },
//     {
//       markDefs: [],
//       children: [Array],
//       _type: 'block',
//       style: 'normal',
//       _key: 'b2d4d3545283'
//     },
//     {
//       _key: '93627ada765b',
//       markDefs: [],
//       children: [Array],
//       _type: 'block',
//       style: 'normal'
//     },
//     { _type: 'image', _key: '9e1b6b1c6002', asset: [Object] },
//     {
//       children: [Array],
//       level: 1,
//       _type: 'block',
//       style: 'normal',
//       _key: '24f9ce50b014',
//       listItem: 'number',
//       markDefs: []
//     },
//     {
//       style: 'normal',
//       _key: '8c1a9917eb5e',
//       listItem: 'number',
//       markDefs: [],
//       children: [Array],
//       level: 1,
//       _type: 'block'
//     },
//     {
//       _key: '9ed0c706ca63',
//       listItem: 'number',
//       markDefs: [],
//       children: [Array],
//       level: 1,
//       _type: 'block',
//       style: 'normal'
//     },
//     {
//       style: 'normal',
//       _key: '6e593e707650',
//       listItem: 'number',
//       markDefs: [],
//       children: [Array],
//       level: 1,
//       _type: 'block'
//     },
//     {
//       markDefs: [],
//       children: [Array],
//       level: 1,
//       _type: 'block',
//       style: 'normal',
//       _key: '33b52a6acae9',
//       listItem: 'number'
//     },
//     {
//       children: [Array],
//       level: 1,
//       _type: 'block',
//       style: 'normal',
//       _key: '0f5d863a2e0f',
//       listItem: 'number',
//       markDefs: []
//     },
//     {
//       _type: 'block',
//       style: 'h3',
//       _key: '8907bb5eb64d',
//       markDefs: [],
//       children: [Array]
//     },
//     { _type: 'image', _key: '642f8b86fca1', asset: [Object] },
//     {
//       markDefs: [],
//       children: [Array],
//       _type: 'block',
//       style: 'h3',
//       _key: '056f007d3edd'
//     },
//     {
//       markDefs: [],
//       children: [Array],
//       _type: 'block',
//       style: 'normal',
//       _key: 'e83dec2a7aa4'
//     },
//     {
//       children: [Array],
//       _type: 'block',
//       style: 'normal',
//       _key: 'd4a1fc49d095',
//       markDefs: []
//     }
//   ],
//   author: {
//     _weak: true,
//     _ref: '506f27bf-018c-4771-9a5a-5901c4b34fbc',
//     _type: 'reference'
//   },
//   tags: [
//     {
//       _type: 'reference',
//       _key: '7270025f4512',
//       _weak: true,
//       _ref: '49c44314-a267-4029-8f22-31b7cf8590b8'
//     },
//     {
//       _key: 'bd5bc14b21ef',
//       _weak: true,
//       _ref: '88c0a542-ddf6-4d3b-810d-fbdca42fe793',
//       _type: 'reference'
//     }
//   ]
// }
