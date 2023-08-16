import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({
      name: "aun",
      title: "Author Unique Name",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
