const section = {
    name: "section",
    title: "Section",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type:"block" }]
        }

    ]
}

export default section