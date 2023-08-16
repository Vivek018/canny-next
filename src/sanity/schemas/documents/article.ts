import { SlugRule, StringRule, defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: SlugRule) => Rule.required(),
    }),
    defineField({
      name: "header",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      weak: true,
      to: [{ type: "author" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: "tag" }] }],
    }),
  ],
});
