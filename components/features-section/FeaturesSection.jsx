import React from "react";
import FeatureRow from "./FeatureRow";
import SnippetsFeature from "../../public/images/snippetsfeature.png";
import SnippetsCollection from "../../public/images/snippetscollection.png";
import Snippet from "../../public/images/snippet.png";
import Summary from "../../public/images/summary.png";
import SummariesFeature from "../../public/images/summariesfeature.png";

const FeaturesSection = ({ data }) => {
  return (
    <div id="features" className="w-4/5 flex flex-col gap-12 pb-40">
      <FeatureRow
        heading={data[0].title}
        points={data[0].points}
        textPosition="right"
        image={SnippetsFeature}
        imageAlt="retube snippets feature"
      />
      <FeatureRow
        heading={data[1].title}
        points={data[1].points}
        textPosition="left"
        image={Snippet}
        imageAlt="retube snippet"
      />
      <FeatureRow
        heading={data[2].title}
        points={data[2].points}
        textPosition="right"
        image={SnippetsCollection}
        imageAlt="retube snippets collection"
      />
      <FeatureRow
        heading={data[3].title}
        points={data[3].points}
        textPosition="left"
        image={SummariesFeature}
        imageAlt="retube summarise feature"
      />
      <FeatureRow
        heading={data[4].title}
        points={data[4].points}
        textPosition="right"
        image={Summary}
        imageAlt="retube summary"
      />
    </div>
  );
};

export default FeaturesSection;
