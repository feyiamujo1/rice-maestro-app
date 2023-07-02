import { defineField } from "sanity";

export const subscription = defineField({
  name: "subscription",
  title: "Subscription",
  type: "document",
  initialValue: () => ({
    created_at: new Date().toISOString(),
  }),
  fields: [
    {
      name: "endpoint",
      title: "Endpoint",
      type: "string",
    },
    {
      name: "keys",
      title: "Keys",
      type: "object",
      fields: [
        {
          name: "p256dh",
          title: "P256dh",
          type: "string",
        },
        {
          name: "auth",
          title: "Auth",
          type: "string",
        },
      ],
    },
    {
      name: "created_at",
      title: "Created At",
      type: "datetime",
    },
  ],
});
