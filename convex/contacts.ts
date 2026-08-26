import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const contactId = await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    });
    return { success: true, contactId };
  },
});

export const list = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("contacts").order("desc").take(20);
  },
});
