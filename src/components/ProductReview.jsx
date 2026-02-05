import ProductReviewOsmo from "./ProductReviewOsmo";
import ProductReviewNextbase from "./ProductReviewNextbase";
import ProductReviewGarmin from "./ProductReviewGarmin";
import ProductReviewNexar from "./ProductReviewNexar";
import ProductReviewVantrue from "./ProductReviewVantrue";

/*
 * ProductReview renders a full product review card based on the product rank.
 *
 * Each product has unique elementor element IDs baked into CSS selectors,
 * so we dispatch to per-product components that preserve their exact markup.
 * The product prop is used only for selecting the correct component by rank.
 *
 * Props: product object with shape:
 *   rank: number (1-5)
 *   name: string
 *   brand: string
 *   url: string
 *   image: { src, width, height, srcSet, sizes, className }
 *   grade: string
 *   rating: string
 *   starRating: string
 *   starClass: string
 *   analysisTitle: string
 *   analysisContent: JSX or array of paragraphs
 *   progressBars: [{ label, value }]
 *   pros: [string]
 *   cons: [string]
 *   wrapUpContent: JSX (optional, only for product 1)
 *   showAwardBadge: boolean (optional, only for product 1)
 *   elementorIds: object with all the unique elementor element IDs
 */

const REVIEW_BY_RANK = {
    1: ProductReviewOsmo,
    2: ProductReviewNextbase,
    3: ProductReviewGarmin,
    4: ProductReviewNexar,
    5: ProductReviewVantrue,
};

function ProductReview({ product }) {
    const ReviewComponent = REVIEW_BY_RANK[product.rank];
    if (!ReviewComponent) {
        return null;
    }
    return <ReviewComponent />;
}

export default ProductReview;
