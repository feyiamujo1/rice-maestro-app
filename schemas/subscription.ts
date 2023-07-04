import { defineType } from "sanity";

export const subscription = defineType({
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
  preview: {
    select: {
      title: "endpoint",
      subtitle: "created_at",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}`,
        subtitle: `Subscribed at ${new Date(subtitle).toLocaleString() || ""}`,
      };
    },
  },
});
