import HeroSection from "./HeroSection";
import ProductReview from "./ProductReview";
import WhatIsDashCam from "./WhatIsDashCam";
import AdvantagesSection from "./AdvantagesSection";
import ThingsToConsider from "./ThingsToConsider";
import WhatToAvoid from "./WhatToAvoid";
import ExpertSection from "./ExpertSection";
import DisclaimerFooter from "./DisclaimerFooter";
import PRODUCTS from "../data/products";
import { ANALYSIS_BY_RANK, WRAP_UP_BY_RANK } from "../data/content";

function Main() {
  return (
    <main
      id="content"
      className="site-main post-69963 page type-page status-publish hentry"
    >
      <div className="page-content">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="69963"
          className="elementor elementor-69963"
          data-elementor-post-type="page"
        >
          <HeroSection />

          {PRODUCTS.map((product) => (
            <ProductReview
              key={product.rank}
              product={{
                ...product,
                analysis: ANALYSIS_BY_RANK[product.rank],
                wrapUp: WRAP_UP_BY_RANK[product.rank],
              }}
            />
          ))}

          <WhatIsDashCam />
          <AdvantagesSection />
          <ThingsToConsider />
          <WhatToAvoid />
          <ExpertSection />
          <DisclaimerFooter />
        </div>
      </div>
    </main>
  );
}

export default Main;
