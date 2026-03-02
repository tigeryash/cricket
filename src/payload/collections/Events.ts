import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: { useAsTitle: "name" },
  fields: [
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "name", type: "text", required: true },
    { name: "date", type: "text", required: true },
    { name: "time", type: "text", required: true },
    { name: "location", type: "text", required: true },
    { name: "ages", type: "text", required: true },
    { name: "level", type: "text", required: true },
    { name: "price", type: "text", required: true },
    { name: "deadline", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    {
      name: "expectations",
      type: "array",
      required: true,
      fields: [{ name: "item", type: "text", required: true }],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};