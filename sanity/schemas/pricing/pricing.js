const pricing = {
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "sub_heading",
      title: "Sub-Heading",
      type: "text",
    },
    {
      name: "billing_types",
      title: "Billing types",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "billingType" }],
        },
      ],
    },
  ],
};

export default pricing;
