import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),

  projects: defineTable({
    slug: v.string(),
    title: v.string(),
    category: v.string(),
    tagline: v.string(),
    description: v.string(),
    longDescription: v.string(),
    metrics: v.optional(v.string()),
    tags: v.array(v.string()),
    technologies: v.array(v.string()),
    deliverables: v.array(v.string()),
    architecture: v.optional(v.string()),
    process: v.array(
      v.object({
        title: v.string(),
        description: v.string(),
      })
    ),
    detailsUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    likes: v.number(),
    featured: v.boolean(),
  }),

  skills: defineTable({
    name: v.string(),
    category: v.string(),
    level: v.string(),
    endorsements: v.number(),
    icon: v.optional(v.string()),
    highlight: v.optional(v.string()),
  }),

  guestbook: defineTable({
    name: v.string(),
    role: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    avatar: v.optional(v.string()),
    emoji: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
