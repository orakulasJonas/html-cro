function ProItem({ text, checkmarkSrc }) {
    return (
        <>
            <div className="elementor-widget-container">
                <img
                    loading="lazy"
                    decoding="async"
                    width="21"
                    height="21"
                    src={checkmarkSrc}
                    className="attachment-large size-large wp-image-159"
                    alt=""
                />{" "}
            </div>
            <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{text}</h2>{" "}
            </div>
        </>
    );
}

export default ProItem;
