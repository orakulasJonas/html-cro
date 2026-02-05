/**
 * Single progress bar styled by Elementor CSS.
 * The elId is embedded in the className so CSS can target it.
 */
export default function ProgressBar({ elId, title, pct }) {
  const labelHtmlId = `pb-label-${elId}`;
  return (
    <div className={`elementor-element elementor-element-${elId} ob-has-background-overlay elementor-widget elementor-widget-progress`}>
      <div className="elementor-widget-container">
        <span className="elementor-title" id={labelHtmlId}>{title}{" "}</span>
        <div
          className="elementor-progress-wrapper progress-success"
          role="progressbar"
          aria-labelledby={labelHtmlId}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={pct}
          aria-valuetext={`${pct}% ( )`}
        >
          <div className="elementor-progress-bar" data-max={pct}>
            <span className="elementor-progress-text"> </span>
            <span className="elementor-progress-percentage">{pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
