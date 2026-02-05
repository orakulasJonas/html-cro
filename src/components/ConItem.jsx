function ConItem({ text, closeIconUrl }) {
    return (
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
    );
}

export default ConItem;
