const plan = {
  name: "plan",
  title: "Plan",
  type: "document",
  fields: [
    {
      name: "plan_name",
      title: "Plan name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "billing_label",
      type: "reference",
      to: [
        {
          type: "billing_label",
        },
      ],
    },
    {
      name: "feature_points",
      title: "Feature points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default plan;
