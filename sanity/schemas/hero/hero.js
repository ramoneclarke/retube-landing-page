const hero = {
  name: "hero",
  title: "Hero",
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
      name: "cta_button",
      type: "reference",
      to: [
        {
          type: "ctabutton",
        },
      ],
    },
    {
      name: "hero_image",
      type: "reference",
      to: [
        {
          type: "hero_image",
        },
      ],
    },
  ],
};

export default hero;
