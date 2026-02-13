import { defineConfig } from "prisma/config";
import { config } from "dotenv";

config();
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
    // optional if needed:
    // directUrl: env("DIRECT_URL"),
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});