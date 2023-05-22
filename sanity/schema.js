import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import hero from "./schemas/hero/hero";
import heroImage from "./schemas/hero/heroimage";
import ctaButton from "./schemas/hero/ctabutton";

export const schema = {
  types: [post, author, category, blockContent, hero, heroImage, ctaButton],
};
