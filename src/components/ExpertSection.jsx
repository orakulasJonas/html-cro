import expertAvatarAlt from "../assets/expert-avatar-alt.png";
import { EXPERT_AVATAR_ALT_IMAGES } from "../constants";

function ExpertSection() {
    return (
        <>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-73cbea9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="73cbea9"
                        data-element_type="section"
                        data-settings='{"_ob_glider_is_slider":"no"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c6374c"
                                data-id="3c6374c"
                                data-element_type="column"
                                data-settings='{"_ob_column_hoveranimator":"no","_ob_column_has_pseudo":"no"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-b033e85 elementor-position-top ob-has-background-overlay elementor-widget elementor-widget-image-box"
                                        data-id="b033e85"
                                        data-element_type="widget"
                                        data-settings='{"_ob_widget_stalker_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no"}'
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width="362"
                                                        height="362"
                                                        src={expertAvatarAlt}
                                                        className="attachment-full size-full wp-image-61752"
                                                        alt=""
                                                        srcSet={`${EXPERT_AVATAR_ALT_IMAGES.main} 362w, ${EXPERT_AVATAR_ALT_IMAGES.w300} 300w, ${EXPERT_AVATAR_ALT_IMAGES.w150} 150w`}
                                                        sizes="(max-width: 362px) 100vw, 362px"
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">Robert M - Tech Expert</h3>
                                                    <p className="elementor-image-box-description">
                                                        With 22 years of experience working with car gadgets, Robert knows everything there is about dashcams. In this
                                                        review, he tested various dashcams to find the most reliable ones.
                                                    </p>
                                                </div>
                                            </div>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
}

export default ExpertSection;
