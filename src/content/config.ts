import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const book = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Transform string to Date object
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    amazonLink: z.string().optional(),
    barnesNobleLink: z.string().optional(),
    adlibrisLink: z.string().optional(),
  }),
});

const interview = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog, book, interview };
