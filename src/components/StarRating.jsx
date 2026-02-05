import { SCHEMA_RATING_URL } from "../constants";

const STAR_CHAR = "\uE934";
const NUM_FULL = 4;

/**
 * Displays a 5-star rating widget styled by Elementor CSS.
 * Only the className on each element matters for styling;
 * the schema attributes are kept for accessibility / SEO.
 */
export default function StarRating({ elId, score, partialClassName }) {
  return (
    <div className={`elementor-element elementor-element-${elId} elementor-star-rating--align-center elementor--star-style-star_fontawesome ob-has-background-overlay elementor-widget elementor-widget-star-rating`}>
      <div className="elementor-widget-container">
        <div className="elementor-star-rating__wrapper">
          <div
            className="elementor-star-rating"
            title={score}
            itemType={SCHEMA_RATING_URL}
            itemScope=""
            itemProp="reviewRating"
          >
            {[...Array(NUM_FULL)].map((_, i) => (
              <i key={`s${i}`} className="elementor-star-full">{STAR_CHAR}</i>
            ))}
            <i className={partialClassName}>{STAR_CHAR}</i>{" "}
            <span itemProp="ratingValue" className="elementor-screen-only">{score}</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
