import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
});

export async function getStaticProps() {
  try {
    const hero = await client.fetch(`*[_type == "hero"]`);

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
    <main
      className={`flex bg-lighter min-h-screen flex-col items-center`}
    ></main>
  );
}
