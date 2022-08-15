

export default {
    name: "Certification",
  title: "Certification",
  type: "document",
  fields: [
      {
        name: "Title",
        title: "Lot number",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 96,
        },
      },
    ],
  };