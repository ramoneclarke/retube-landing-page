import hero from "./schemas/hero/hero";
import heroImage from "./schemas/hero/heroimage";
import ctaButton from "./schemas/hero/ctabutton";
import feature from "./schemas/features/feature";
import pricing from "./schemas/pricing/pricing";
import billingType from "./schemas/pricing/billingType";
import plan from "./schemas/pricing/plan";
import billingLabel from "./schemas/pricing/billingLabel";

export const schema = {
  types: [
    hero,
    heroImage,
    ctaButton,
    feature,
    pricing,
    billingType,
    billingLabel,
    plan,
  ],
};
