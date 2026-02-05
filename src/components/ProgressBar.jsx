function ProgressBar({ id, label, value }) {
  const barId = `elementor-progress-bar-${id}`;
  const percentText = `${value}%`;
  const ariaText = `${value}% ( )`;

  return (
    <div
      className={`elementor-element elementor-element-${id} ob-has-background-overlay elementor-widget elementor-widget-progress`}
      data-id={id}
      data-element_type="widget"
      data-settings='{"_ob_widget_stalker_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no"}'
      data-widget_type="progress.default"
    >
      <div className="elementor-widget-container">
        <span className="elementor-title" id={barId}>
          {label}{" "}
        </span>

        <div
          aria-labelledby={barId}
          className="elementor-progress-wrapper progress-success"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={value}
          aria-valuetext={ariaText}
        >
          <div className="elementor-progress-bar" data-max={value}>
            <span className="elementor-progress-text"> </span>
            <span className="elementor-progress-percentage">{percentText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
