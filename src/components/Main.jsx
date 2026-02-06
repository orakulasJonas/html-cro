import HeroSection from "./HeroSection";
import ProductOsmo from "./ProductOsmo";
import ProductNextbase from "./ProductNextbase";
import ProductGarmin from "./ProductGarmin";
import ProductNexar from "./ProductNexar";
import ProductVantrue from "./ProductVantrue";
import EducationalSection from "./EducationalSection";
import PageFooterSection from "./PageFooterSection";

function Main() {
    return (
        <main id="content" className="site-main post-69963 page type-page status-publish hentry">
            <div className="page-content">
                <div data-elementor-type="wp-page" data-elementor-id="69963" className="elementor elementor-69963" data-elementor-post-type="page">
                    <HeroSection />
                    <ProductOsmo />
                    <ProductNextbase />
                    <ProductGarmin />
                    <ProductNexar />
                    <ProductVantrue />
                    <EducationalSection />
                    <PageFooterSection />
                </div>
            </div>
        </main>
    );
}

export default Main;
