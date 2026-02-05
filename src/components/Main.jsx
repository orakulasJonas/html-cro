import HeroSection from "./HeroSection";
import ProductReviewOsmo from "./ProductReviewOsmo";
import ProductReviewNextbase from "./ProductReviewNextbase";
import ProductReviewGarmin from "./ProductReviewGarmin";
import ProductReviewNexar from "./ProductReviewNexar";
import ProductReviewVantrue from "./ProductReviewVantrue";
import WhatIsDashCam from "./WhatIsDashCam";
import AdvantagesSection from "./AdvantagesSection";
import ThingsToConsider from "./ThingsToConsider";
import WhatToAvoid from "./WhatToAvoid";
import ExpertSection from "./ExpertSection";
import DisclaimerFooter from "./DisclaimerFooter";

function Main() {
    return (
        <main id="content" className="site-main post-69963 page type-page status-publish hentry">
            <div className="page-content">
                <div data-elementor-type="wp-page" data-elementor-id="69963" className="elementor elementor-69963" data-elementor-post-type="page">
                    <HeroSection />
                    <ProductReviewOsmo />
                    <ProductReviewNextbase />
                    <ProductReviewGarmin />
                    <ProductReviewNexar />
                    <ProductReviewVantrue />
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
