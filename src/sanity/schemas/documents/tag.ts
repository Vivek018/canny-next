import { defineField, defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tags",
  type: "document",
  fields: [
    defineField({
      name: "aun",
      title: "Tag Unique Name",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
