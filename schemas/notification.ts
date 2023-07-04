import { defineField, defineType } from "sanity";

export const notification = defineType({
  name: "notification",
  title: "Notification",
  type: "document",
  fields: [
    defineField({
      name: "action",
      title: "action",
      type: "string",
      validation(rule) {
        return rule.required().error("Action is required");
      },
      options: {
        layout: "radio",
        list: [
          { title: "Create", value: "create" },
          { title: "Update", value: "update" },
          { title: "Delete", value: "delete" },
        ],
      },
    }),
    {
      name: "section",
      title: "Section",
      type: "reference",
      to: [{ type: "section" }],
      validation: (rule) => rule.required().error("Section is required"),
    },
  ],

  preview: {
    select: {
      title: "action",
      subtitle: "section.name",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title.toUpperCase()}`,
        subtitle: `${subtitle}`,
      };
    },
  },
});
