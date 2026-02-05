import { SCHEMA_RATING_URL } from '../constants';

const STAR_ICON_CHAR = '\uE934';

function StarRating({ rating, starClass }) {
  const fullStarCount = 4;
  const starElements = [];

  for (let idx = 0; idx < fullStarCount; idx++) {
    starElements.push(
      <i key={`full-${idx}`} className="elementor-star-full">{STAR_ICON_CHAR}</i>
    );
  }

  starElements.push(
    <i key="partial" className={starClass}>{STAR_ICON_CHAR}</i>
  );

  return (
    <div className="elementor-widget-container">
      <div className="elementor-star-rating__wrapper">
        <div
          className="elementor-star-rating"
          title={rating}
          itemType={SCHEMA_RATING_URL}
          itemScope=""
          itemProp="reviewRating"
        >
          {starElements}{" "}
          <span itemProp="ratingValue" className="elementor-screen-only">
            {rating}
          </span>
        </div>{" "}
      </div>
    </div>
  );
}

export default StarRating;
