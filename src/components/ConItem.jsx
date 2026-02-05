function ConItem({ text, closeIconUrl }) {
    return (
        <>
            <div className="elementor-widget-container">
                <img
                    loading="lazy"
                    decoding="async"
                    width="21"
                    height="21"
                    src={closeIconUrl}
                    className="attachment-large size-large wp-image-44917"
                    alt=""
                />{" "}
            </div>
            <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{text}</h2>{" "}
            </div>
        </>
    );
}

export default ConItem;
