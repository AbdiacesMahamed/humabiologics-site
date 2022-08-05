export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
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
      name: "description",
      title: "Description",
      type: "string",
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

    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "application",
      title: "Applications",
      type: "string",
    },

    {
      name: "header",
      title: "Header",
      type: "string",
    },

    {
      name: "protocals",
      title: "Protocals",
      type: "blockContent",
    },
    {
      name: "qualityTesting",
      title: "Quality Testing",
      type: "blockContent",
    },

    {
      name: "materialsSafetyDataSheet",
      title: "Materials Safety Data Sheet",
      type: "blockContent",
    },
    {
      name: "applicationNotes",
      title: "Application Notes",
      type: "blockContent",
    },

    {
      name: "countInStock",
      title: "CountInStock",
      type: "number",
    },
  ],
};
