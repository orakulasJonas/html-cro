import checkmark from "../assets/checkmark.png";
import awardBadge from "../assets/award-badge.png";
import { AWARD_BADGE_IMAGES } from "../constants";
import StarRating from "./StarRating";
import ProgressBar from "./ProgressBar";

/* ── tiny helpers ─────────────────────────────────────────────── */

/** Elementor "container" – just needs the right className for CSS. */
const Box = ({ id, extra = "", children }) => (
  <div className={`elementor-element elementor-element-${id} ${extra}`}>{children}</div>
);

/** Elementor heading widget wrapper. */
const Heading = ({ id, extra = "", children }) => (
  <div className={`elementor-element elementor-element-${id} ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ${extra}`}>
    <div className="elementor-widget-container">
      <h2 className="elementor-heading-title elementor-size-default">{children}</h2>{" "}
    </div>
  </div>
);

/** Elementor text-editor widget wrapper. */
const TextBlock = ({ id, extra = "", children }) => (
  <div className={`elementor-element elementor-element-${id} ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor ${extra}`}>
    <div className="elementor-widget-container">{children}</div>
  </div>
);

/** One pro item: checkmark icon + label. */
const ProRow = ({ ids, label }) => (
  <Box id={ids.r} extra="e-con-full e-flex e-con e-child">
    <div className={`elementor-element elementor-element-${ids.ic} elementor-widget__width-auto ob-has-background-overlay elementor-widget elementor-widget-image`}>
      <div className="elementor-widget-container">
        <img loading="lazy" decoding="async" width="21" height="21" src={checkmark} className="attachment-large size-large wp-image-159" alt="" />{" "}
      </div>
    </div>
    <Heading id={ids.tx} extra="elementor-widget__width-inherit">{label}</Heading>
  </Box>
);

/** One con item: X icon + label. */
const ConRow = ({ ids, label, iconSrc }) => (
  <Box id={ids.r} extra="e-con-full e-flex e-con e-child">
    <div className={`elementor-element elementor-element-${ids.ic} ob-has-background-overlay elementor-widget elementor-widget-image`}>
      <div className="elementor-widget-container">
        <img loading="lazy" decoding="async" width="21" height="21" src={iconSrc} className="attachment-large size-large wp-image-44917" alt="" />{" "}
      </div>
    </div>
    <Heading id={ids.tx} extra="elementor-widget__width-inherit">{label}</Heading>
  </Box>
);

/** CTA button. */
const CtaButton = ({ id, href }) => (
  <div className={`elementor-element elementor-element-${id} elementor-align-center ob-has-background-overlay elementor-widget elementor-widget-button`}>
    <div className="elementor-widget-container">
      <div className="elementor-button-wrapper">
        <a className="elementor-button elementor-button-link elementor-size-sm" href={href}>
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-text">CHECK AVAILABILITY</span>
          </span>
        </a>
      </div>
    </div>
  </div>
);

/** Horizontal divider. */
const Divider = ({ id }) => (
  <div className={`elementor-element elementor-element-${id} elementor-widget-divider--view-line ob-has-background-overlay elementor-widget elementor-widget-divider`}>
    <div className="elementor-widget-container">
      <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
    </div>
  </div>
);

/* ── main component ──────────────────────────────────────────── */

/**
 * Renders a full product-review card.
 *
 * `product`  – config object from src/data/products.jsx
 * `children` – the analysis paragraphs (unique per product, passed as JSX)
 */
export default function ProductReview({ product }) {
  const {
    title, brandLabel, href, overallGrade, ratingLabel,
    stars, hasBadge, img, analysis,
    wrapUp, bars, pros, cons, xIconUrl, el,
  } = product;

  const prosLeft = el.prosL || [];
  const prosRight = el.prosR || [];
  const allPros = [...prosLeft, ...prosRight];

  return (
    <Box id={el.root} extra="e-con-full e-flex e-con e-parent">
      <Box id={el.mainCard} extra="e-con-full e-flex e-con e-child">

        {/* ── product header: name + optional badge ── */}
        <Box id={el.headerRow} extra="e-con-full e-flex e-con e-child">
          <Box id={el.spacerL} extra="e-con-full elementor-hidden-mobile e-flex e-con e-child" />

          <Box id={el.nameWrap} extra="e-con-full e-flex e-con e-child">
            <Heading id={el.titleEl}><a href={href}>{title}</a></Heading>
            <Heading id={el.subtitleEl}>{brandLabel}</Heading>
          </Box>

          {hasBadge ? (
            <Box id={el.badgeWrap} extra="e-con-full elementor-hidden-mobile e-flex e-con e-child">
              <div className={`elementor-element elementor-element-${el.badgeImg} elementor-hidden-mobile ob-has-background-overlay elementor-widget elementor-widget-image`}>
                <div className="elementor-widget-container">
                  <img
                    loading="lazy" decoding="async" width="280" height="280"
                    src={awardBadge}
                    className="attachment-large size-large wp-image-156"
                    alt="Health Consumer Review Award"
                    srcSet={`${AWARD_BADGE_IMAGES.main} 280w, ${AWARD_BADGE_IMAGES.w150} 150w`}
                    sizes="(max-width: 280px) 100vw, 280px"
                  />{" "}
                </div>
              </div>
            </Box>
          ) : (
            <Box id={el.spacerR} extra="e-con-full elementor-hidden-mobile e-flex e-con e-child" />
          )}
        </Box>

        {/* ── stats row: image · grade · rating ── */}
        <Box id={el.statsRow} extra="e-con-full e-flex e-con e-child">
          <Box id={el.imgWrap} extra="e-con-full e-flex e-con e-child">
            <div className={`elementor-element elementor-element-${el.imgWidget} ob-has-background-overlay elementor-widget elementor-widget-image`}>
              <div className="elementor-widget-container">
                <a href={href}>
                  <img
                    loading="lazy" decoding="async"
                    width={img.w} height={img.h}
                    src={img.src}
                    className={img.cls}
                    alt=""
                    srcSet={img.srcSet}
                    sizes={img.sizes}
                  />{" "}
                </a>
              </div>
            </div>
          </Box>

          <Box id={el.gradeWrap} extra="e-con-full e-flex e-con e-child">
            <Box id={el.gradeInner} extra="e-con-full e-flex e-con e-child">
              <Heading id={el.gradeLbl}>Overall Grade</Heading>
              <Heading id={el.gradeVal}>{overallGrade}</Heading>
            </Box>
          </Box>

          <Box id={el.rateWrap} extra="e-con-full e-flex e-con e-child">
            <Heading id={el.rateLbl}>Rating</Heading>
            <Heading id={el.rateVal}>{ratingLabel}</Heading>
            <StarRating elId={el.starWidget} score={stars.display} partialClassName={stars.partialClass} />
          </Box>
        </Box>

        {/* ── body: analysis, CTA, bars, pros, cons ── */}
        <Box id={el.bodyWrap} extra="e-con-full e-flex e-con e-child">
          <Heading id={el.bodyTitle}>OVERALL ANALYSIS</Heading>
          <TextBlock id={el.bodyText}>{analysis}</TextBlock>

          {el.cta1 && <CtaButton id={el.cta1} href={href} />}

          {bars.map((bar, i) => (
            <ProgressBar key={el.bars[i]} elId={el.bars[i]} title={bar.label} pct={bar.pct} />
          ))}

          <Divider id={el.divider} />

          {/* pros */}
          <Heading id={el.prosTitle}>Pros</Heading>
          <Box id={el.prosOuter} extra="e-con-full e-flex e-con e-child">
            <Box id={el.prosColL} extra="e-con-full e-flex e-con e-child">
              {prosLeft.map((ids, i) => (
                <ProRow key={ids.r} ids={ids} label={pros[i]} />
              ))}
            </Box>
            <Box id={el.prosColR} extra="e-con-full e-flex e-con e-child">
              {prosRight.map((ids, i) => (
                <ProRow key={ids.r} ids={ids} label={pros[prosLeft.length + i]} />
              ))}
            </Box>
          </Box>

          {/* cons */}
          <Heading id={el.consTitle}>Cons</Heading>
          <Box id={el.consOuter} extra="e-con-full e-flex e-con e-child">
            <Box id={el.consCol} extra="e-con-full e-flex e-con e-child">
              {el.consItems.map((ids, i) => (
                <ConRow key={ids.r} ids={ids} label={cons[i]} iconSrc={xIconUrl} />
              ))}
            </Box>
            <Box id={el.consSpacer} extra="e-con-full e-flex e-con e-child" />
          </Box>

          {el.cta2 && <CtaButton id={el.cta2} href={href} />}

          {/* wrap-up (only first product) */}
          {wrapUp && el.wrapTitle && (
            <>
              <Heading id={el.wrapTitle}>WRAP-UP</Heading>
              <TextBlock id={el.wrapText}>
                <div className={`elementor-element elementor-element-${el.wrapInner} elementor-widget elementor-widget-text-editor`}>
                  <div className="elementor-widget-container">{wrapUp}</div>
                </div>
              </TextBlock>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
