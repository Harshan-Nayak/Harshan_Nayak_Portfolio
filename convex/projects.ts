import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { initialProjectsData } from "../app/data/initialData";

export { initialProjectsData };

export const list = query({
  args: {},
  handler: async (ctx: any) => {
    const projects = await ctx.db.query("projects").collect();
    if (projects.length === 0) {
      return initialProjectsData;
    }
    return projects;
  },
});

export const like = mutation({
  args: {
    slug: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const project = await ctx.db
      .query("projects")
      .filter((q: any) => q.eq(q.field("slug"), args.slug))
      .first();

    if (project) {
      await ctx.db.patch(project._id, {
        likes: project.likes + 1,
      });
      return { success: true, likes: project.likes + 1 };
    }
    return { success: false, likes: 0 };
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx: any) => {
    const existing = await ctx.db.query("projects").first();
    if (!existing) {
      for (const p of initialProjectsData) {
        await ctx.db.insert("projects", p);
      }
      return { seeded: true, count: initialProjectsData.length };
    }
    return { seeded: false, message: "Projects already seeded" };
  },
});
