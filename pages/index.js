import { createClient } from "next-sanity";
import FeaturesSection from "@/components/design-components/FeaturesSection";
import Footer from "@/components/design-components/Footer";
import Header from "@/components/header-components/Header";
import Hero from "@/components/hero-components/Hero";
import PricingSection from "@/components/pricing-components/PricingSection";
import dayjs from "dayjs";

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

    return {
      props: {
        hero,
      },
    };
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return {
      props: {
        hero: null,
        error: "Failed to fetch hero data",
      },
    };
  }
}

export default function Home({ hero }) {
  console.log(hero);
  return (
    <main className={`flex bg-lighter min-h-screen flex-col items-center`}>
      <Header />
      <Hero data={hero} />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
