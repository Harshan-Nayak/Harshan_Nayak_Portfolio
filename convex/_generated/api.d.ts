/* eslint-disable */
import type * as contacts from "../contacts.js";
import type * as projects from "../projects.js";
import type * as skills from "../skills.js";
import type * as guestbook from "../guestbook.js";
import type { AnyApi, FilterApi, FunctionReference } from "convex/server";

export declare const api: FilterApi<
  {
    contacts: typeof contacts;
    projects: typeof projects;
    skills: typeof skills;
    guestbook: typeof guestbook;
  },
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  {
    contacts: typeof contacts;
    projects: typeof projects;
    skills: typeof skills;
    guestbook: typeof guestbook;
  },
  FunctionReference<any, "internal">
>;
