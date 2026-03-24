import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().url().optional(),         // not required for game-dev
    tags: z.array(z.string()).default([]),
    status: z.enum(["ongoing", "maintained", "completed", "dropped"]).optional(),
    category: z.enum(["game-dev", "package", "challenge"]).default("game-dev"),
    // game-dev specific (ignored for other categories)
    devStatus: z.enum(["in-development", "released", "on-hold", "cancelled"]).optional(),
    engine: z.string().optional(),               // e.g. "Unity", "Godot"
    screenshots: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).default([]),
    mapImage: z.string().optional(),
    mapDescription: z.string().optional(),
  }),
});

const characters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/characters" }),
  schema: z.object({
    name: z.string(),
    project: z.string(),                         // slug of the parent project
    role: z.string().optional(),                 // e.g. "Protagonist", "Antagonist"
    portrait: z.string().optional(),             // image path
    abilities: z.array(z.string()).default([]),
  }),
});

const lore = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lore" }),
  schema: z.object({
    title: z.string(),
    project: z.string(),                         // slug of the parent project
    order: z.number().default(0),                // display order within the project
  }),
});

const travel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travel" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { projects, characters, lore, travel };
