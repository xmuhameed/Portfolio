import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      }
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "categorie",
      title: "Categorie",
      type: "string",
    },
    {
      name: "repo",
      title: "Repo",
      type: "string",
    },
    {
      name: "live",
      title: "Live",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        history: true,
      }
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{
        type: "image"
      }],
      options: {
        history: true,
      }
    },
  ]
})
