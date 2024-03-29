const feature = {
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      type: "image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
};

export default feature;
