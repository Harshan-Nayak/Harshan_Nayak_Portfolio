import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { initialGuestbookData } from "../app/data/initialData";

export { initialGuestbookData };

export const list = query({
  args: {},
  handler: async (ctx: any) => {
    const entries = await ctx.db.query("guestbook").order("desc").take(30);
    if (entries.length === 0) {
      return initialGuestbookData;
    }
    return entries;
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    emoji: v.optional(v.string()),
  },
  handler: async (ctx: any, args: any) => {
    const id = await ctx.db.insert("guestbook", {
      ...args,
      createdAt: Date.now(),
    });
    return { success: true, id };
  },
});
