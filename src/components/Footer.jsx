import './Footer.css';

function Footer() {
  return (
    <footer id="colophon" itemScope itemType="https://schema.org/WPFooter">
      <div data-elementor-type="wp-post" className="elementor elementor-46300" data-elementor-post-type="elementor-hf">
        <div className="elementor-element elementor-element-footer e-flex e-con-boxed e-con e-parent" data-element_type="container">
          <div className="e-con-inner">
            
            {/* Navigation Links */}
            <div className="elementor-element elementor-element-footernav e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-footernavwidget elementor-icon-list--layout-inline elementor-align-center elementor-widget elementor-widget-icon-list">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items elementor-inline-items">
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#about">
                        <span className="elementor-icon-list-text">ABOUT US</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#privacy">
                        <span className="elementor-icon-list-text">PRIVACY POLICY</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <a href="#terms">
                        <span className="elementor-icon-list-text">TERMS & CONDITIONS</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Disclaimer Section */}
            <div className="elementor-element elementor-element-disclaimer e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-disclaimertitle ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Advertising Disclaimer</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-disclaimertext ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>This website is an advertisement and not a news publication. This website is a product review website. All products reviewed on this website are sold by third parties. This website receives compensation for referrals to third-party websites. The information presented on this website is not intended as medical advice and should not be construed as such. Always consult with your physician or other qualified health-care provider before making any dietary changes or beginning any exercise program. Individual results may vary. See our Terms & Conditions and Privacy Policy for more details.</p>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="elementor-element elementor-element-copyright e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-copyrighttext ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>© {new Date().getFullYear()} Ava's Review. All Rights Reserved.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
