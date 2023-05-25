import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { formatDuration } from "@/utils/utils";
import PlanBenefit from "./PlanBenefit";

const PlanTile = ({
  planName,
  plan,
  price,
  billingLabel,
  featurePoints,
  selectedBillingType,
}) => {
  const snippetsMonthlyLimit = plan.snippets_monthly_limit;
  const snippetsMaxLength = plan.snippets_max_length;
  const summariesMonthlyLimit = plan.summaries_monthly_limit;
  const summariesMaxVideoLength = plan.summaries_max_video_length;

  const router = useRouter();

  return (
    <div className="flex gap-2 md:gap-0 min-h-[30rem] w-full flex-col rounded-2xl bg-lighter p-8 text-darkest shadow-lg dark:bg-darker dark:text-lightest md:w-1/3">
      <h2 className="text-3xl md:text-2xl lg:text-3xl font-medium md:h-16">
        {planName}
      </h2>
      <p className="text-5xl font-bold md:text-4xl lg:text-5xl">
        £{price}
        <span className="text-lg font-normal">
          / {selectedBillingType === "monthly" ? "month" : "year"}
        </span>
      </p>
      <p className="text-lg font-medium">{billingLabel}</p>
      <motion.button
        onClick={() =>
          router.push(`${process.env.NEXT_PUBLIC_APP_DOMAIN}/signup`)
        }
        className="no-tap-highlight mt-4 w-full rounded-lg bg-brand p-4 font-semibold dark:bg-brandDark"
        whileHover={{ scale: 1.05 }}
      >
        Sign up!
      </motion.button>
      {/* Features */}
      <div className="mt-8 flex w-full flex-col">
        {featurePoints.map((point) => (
          <PlanBenefit text={point} key={point} />
        ))}
      </div>
    </div>
  );
};

export default PlanTile;
