import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { initialSkillsData } from "../app/data/initialData";

export { initialSkillsData };

export const list = query({
  args: {},
  handler: async (ctx: any) => {
    const skills = await ctx.db.query("skills").collect();
    if (skills.length === 0) {
      return initialSkillsData;
    }
    return skills;
  },
});

export const endorse = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const skill = await ctx.db
      .query("skills")
      .filter((q: any) => q.eq(q.field("name"), args.name))
      .first();

    if (skill) {
      await ctx.db.patch(skill._id, {
        endorsements: skill.endorsements + 1,
      });
      return { success: true, endorsements: skill.endorsements + 1 };
    }
    return { success: false, endorsements: 0 };
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx: any) => {
    const existing = await ctx.db.query("skills").first();
    if (!existing) {
      for (const s of initialSkillsData) {
        await ctx.db.insert("skills", s);
      }
      return { seeded: true, count: initialSkillsData.length };
    }
    return { seeded: false, message: "Skills already seeded" };
  },
});
