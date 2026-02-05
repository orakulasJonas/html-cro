import logo from "../assets/logo.png";
import { FOOTER_LINKS } from "../constants";

function DisclaimerFooter() {
    return (
        <>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-23f27e08 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="23f27e08"
                        data-element_type="section"
                        data-settings='{"background_background":"classic","_ob_glider_is_slider":"no"}'
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b923491"
                                data-id="b923491"
                                data-element_type="column"
                                data-settings='{"_ob_column_hoveranimator":"no","_ob_column_has_pseudo":"no"}'
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-4d8348cd ob-has-background-overlay elementor-widget elementor-widget-image"
                                        data-id="4d8348cd"
                                        data-element_type="widget"
                                        data-settings='{"_ob_photomorph_use":"no","_ob_widget_stalker_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no"}'
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width="261"
                                                height="234"
                                                src={logo}
                                                className="attachment-full size-full wp-image-41908"
                                                alt=""
                                            />{" "}
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-72dde2db elementor-icon-list--layout-inline elementor-align-right elementor-mobile-align-center elementor-list-item-link-full_width ob-has-background-overlay elementor-widget elementor-widget-icon-list"
                                        data-id="72dde2db"
                                        data-element_type="widget"
                                        data-settings='{"_ob_widget_stalker_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no"}'
                                        data-widget_type="icon-list.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <ul className="elementor-icon-list-items elementor-inline-items">
                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                    <a href="#">
                                                        <span className="elementor-icon-list-text">ABOUT US</span>
                                                    </a>
                                                </li>
                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                    <a href="#">
                                                        <span className="elementor-icon-list-text">PRIVACY POLICY</span>
                                                    </a>
                                                </li>
                                                <li className="elementor-icon-list-item elementor-inline-item">
                                                    <a href="#">
                                                        <span className="elementor-icon-list-text">TERMS & CONDITIONS</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-110fd771 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor"
                                        data-id="110fd771"
                                        data-element_type="widget"
                                        data-settings='{"_ob_use_harakiri":"yes","_ob_harakiri_writing_mode":"inherit","_ob_postman_use":"no","_ob_widget_stalker_use":"no","_ob_poopart_use":"yes","_ob_shadough_use":"no","_ob_allow_hoveranimator":"no"}'
                                        data-widget_type="text-editor.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <p>
                                                <span style={{ fontWeight: 400 }}>Avasreview.com. Copyright © 2026</span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    We are not able to review all products in a given category. All opinions expressed on this site are our own. We do not
                                                    test the products ourselves. Our method is based on “meta-reviews”, where we collect external tests, customer reviews,
                                                    product specifications and prices in one place via complicated data collection and research, so that you as a consumer
                                                    get a better basis for making the right purchase decision.
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    This is an advertisement and not an actual news article, blog, or consumer protection update. This site is owned
                                                    by{" "}
                                                </span>
                                                <b>TT Marketing Ltd</b>
                                                <span style={{ fontWeight: 400 }}>
                                                    . As an affiliate, including Amazon and other programs, we earn from qualifying purchases of certain products.
                                                    Therefore the content may not be neutral, objective or independent, and commission may impacts the location and order
                                                    in which these products appear. Graphics and product images are provided for illustrative purposes only.
                                                </span>
                                            </p>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
}

export default DisclaimerFooter;
