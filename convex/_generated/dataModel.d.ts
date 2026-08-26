/* eslint-disable */
import { GenericDataModel } from "convex/server";
import { GenericId } from "convex/values";
import Schema from "../schema";

export type Id<TableName extends string> = GenericId<TableName>;
export type Doc<TableName extends string> = Record<string, any> & {
  _id: Id<TableName>;
  _creationTime: number;
};

export type DataModel = GenericDataModel;
