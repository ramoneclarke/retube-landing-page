import { createClient } from "next-sanity";
import Footer from "@/components/footer-components/Footer";
import Header from "@/components/header-components/Header";
import Hero from "@/components/hero-components/Hero";
import PricingSection from "@/components/pricing-components/PricingSection";
import dayjs from "dayjs";
import FeaturesSection from "@/components/features-section/FeaturesSection";
import Head from "next/head";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "@/components/header-components/MobileSidebar";

const date = dayjs().format("YYYY-MM-DD");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: date,
  useCdn: false,
});

export async function getStaticProps() {
  try {
    const hero = await client.fetch(`*[_type == "hero"] {
      ...,
      cta_button->,
      hero_image->
    }`);
    const unsortedFeatures = await client.fetch(`*[_type == "feature"]`);
    const features = unsortedFeatures.sort((a, b) => a.order - b.order);
    const pricing = await client.fetch(`*[_type == "pricing"] {
      ...,
      billing_types[]->{
        ...,
        plans[]->{
          ...,
          billing_label->        
        }
      },
    }`);

    return {
      props: {
        hero,
        features,
        pricing,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        hero: null,
        features: null,
        pricing: null,
        error: "Failed to fetch data",
      },
    };
  }
}

export default function Home({ hero, features, pricing }) {
  const [open, setOpen] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    if (!menuClicked) {
      setOpen(true);
      setMenuClicked(true);
    }
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      setOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className={`flex bg-lighter w-full min-h-screen flex-col items-center`}
    >
      <Head>
        <title>Retube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full flex-row overflow-hidden bg-lighter dark:bg-darkest">
        <AnimatePresence>
          {open ? (
            <MobileSidebar
              open={open}
              setOpen={setOpen}
              menuClicked={menuClicked}
              setMenuClicked={setMenuClicked}
              handleClickScroll={handleClickScroll}
            />
          ) : null}
        </AnimatePresence>
      </div>
      <Header handleClick={handleClick} handleClickScroll={handleClickScroll} />
      <Hero data={hero} />
      <FeaturesSection data={features} />
      <PricingSection data={pricing} />
      <Footer />
    </main>
  );
}
