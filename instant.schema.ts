// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react";

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.any(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed(),
    }),
    profiles: i.entity({
      firstName: i.string(),
      lastName: i.string(),
      age: i.number(),
      gender: i.string(),
      createdAt: i.date(),
    }),
  },
  links: {
    profileUser: {
      forward: {
        on: "profiles",
        has: "one",
        label: "$user",
        onDelete: "cascade",
      },
      reverse: { on: "$users", has: "one", label: "profile" },
    },
    profilesAvatar: {
      forward: {
        on: "profiles",
        has: "one",
        label: "avatar",
        onDelete: "cascade",
      },
      reverse: {
        on: "$files",
        has: "one",
        label: "profile",
      },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
