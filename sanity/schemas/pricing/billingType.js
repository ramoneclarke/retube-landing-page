const billingType = {
  name: "billingType",
  title: "Billing Type",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "plan" }],
        },
      ],
    },
  ],
};

export default billingType;
