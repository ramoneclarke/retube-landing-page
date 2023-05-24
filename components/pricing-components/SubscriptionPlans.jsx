import React from "react";
import PlanTile from "./PlanTile";

const SubscriptionPlans = ({
  selectedBillingType,
  planDetails,
  billingTypes,
}) => {
  const plans =
    selectedBillingType === "monthly"
      ? billingTypes[0].plans
      : billingTypes[1].plans;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        {plans.map((plan) => (
          <PlanTile
            key={plan.plan_name}
            planName={plan.plan_name}
            plan={planDetails[0]}
            price={plan.price}
            billingLabel={plan.billing_label.label}
            featurePoints={plan.feature_points}
            selectedBillingType={selectedBillingType}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
