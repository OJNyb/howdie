import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    pdfLink: z.string().optional(),
  }),
});

const book = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/book" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    amazonLink: z.string().optional(),
    barnesNobleLink: z.string().optional(),
    adlibrisLink: z.string().optional(),
    stripeId: z.string().optional(),
  }),
});

const interview = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/interview" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    pubDate: z.coerce.date(),
  }),
});
const thanks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thanks" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, book, interview, thanks };
