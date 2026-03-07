import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { Media } from "./collections/Media.ts";
import { Events } from "./collections/Events.ts";
import { Pages } from "./collections/Pages.ts";

const databaseUri = process.env.DATABASE_URI?.replace(
  "sslmode=require",
  "sslmode=verify-full",
);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
    },
  }),
  collections: [Media, Events, Pages],
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET || "",
      config: {
        endpoint: process.env.R2_ENDPOINT,
        region: "auto",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
        },
      },
    }),
  ],
});