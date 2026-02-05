function ProItem({ text, checkmarkSrc }) {
    return (
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
    );
}

export default ProItem;
