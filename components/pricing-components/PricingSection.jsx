import React, { useState } from "react";
import BillingTypeTabs from "./BillingTypeTabs";
import SubscriptionPlans from "./SubscriptionPlans";

const PricingSection = ({ data }) => {
  const [selectedBillingType, setSelectedBillingType] = useState("monthly");

  return (
    <div
      id="pricing"
      className="w-full bg-slate-200 flex items-center flex-col gap-6 pt-20 md:pb-18 lg:pb-28 pb-16 px-2 md:px-0"
    >
      <div className="flex w-full flex-col items-center gap-12 text-darkest dark:text-lightest">
        <h1 className="text-center font-semibold text-6xl">
          {data[0].heading}
        </h1>
        <h2 className="text-center text-xl">{data[0].sub_heading}</h2>
      </div>
      <div className="flex w-full flex-col items-center">
        <BillingTypeTabs
          setSelectedBillingType={setSelectedBillingType}
          selectedBillingType={selectedBillingType}
          billingTypes={data[0].billing_types}
        />
      </div>
      <div className="flex lg:w-4/5 w-full px-8 md:py-8">
        <SubscriptionPlans
          selectedBillingType={selectedBillingType}
          planDetails={plans}
          billingTypes={data[0].billing_types}
        />
      </div>
    </div>
  );
};

const plans = [
  {
    id: 1,
    name: "free",
    stripe_product_id: "",
    snippets_monthly_limit: 5,
    snippets_max_length: 30,
    summaries_monthly_limit: 5,
    summaries_max_video_length: 300,
    search_max_playlists: 1,
    search_max_playlist_videos: 3,
    search_max_video_length: 300,
  },
  {
    id: 2,
    name: "basic",
    stripe_product_id: "prod_NetJAloqybUvus",
    snippets_monthly_limit: 30,
    snippets_max_length: 60,
    summaries_monthly_limit: 20,
    summaries_max_video_length: 600,
    search_max_playlists: 3,
    search_max_playlist_videos: 10,
    search_max_video_length: 600,
  },
  {
    id: 3,
    name: "premium",
    stripe_product_id: "prod_NetMDdWSorS7dS",
    snippets_monthly_limit: 300,
    snippets_max_length: 300,
    summaries_monthly_limit: 100,
    summaries_max_video_length: 3600,
    search_max_playlists: 10,
    search_max_playlist_videos: 30,
    search_max_video_length: 3600,
  },
  {
    id: 4,
    name: "admin",
    stripe_product_id: "",
    snippets_monthly_limit: 9999,
    snippets_max_length: 5,
    summaries_monthly_limit: 999,
    summaries_max_video_length: 3600,
    search_max_playlists: 20,
    search_max_playlist_videos: 30,
    search_max_video_length: 7200,
  },
];

export default PricingSection;
