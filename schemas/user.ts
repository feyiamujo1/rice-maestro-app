export const user = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "url",
    },
    {
      name: "password",
      type: "string",
      hidden: true,
    },
    {
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    },
  ],
};
