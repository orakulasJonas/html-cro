import React from 'react';
import styles from './Main.module.css';
import heroImage from '../assets/hero-image.jpg';
import expertAvatar from '../assets/expert-avatar.png';
import awardBadge from '../assets/award-badge.png';
import checkmark from '../assets/checkmark.png';

function Main() {
  return (
    <main id="content" className={styles.main}>
      <div className={styles.pageContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <h2 className={styles.mainTitle}>
              We Spent the Last 3 Weeks Testing 24 Dashcams to Find the Best Option for 2026
            </h2>
            
            <div className={styles.heroImageWrapper}>
              <img 
                src={heroImage} 
                className={styles.heroImage} 
                alt="Dashcam Testing" 
                width="639" 
                height="427" 
              />
            </div>
            
            <div className={styles.introText}>
              <p>
                A high-quality dashcam is essential for <strong>road safety, accident documentation, and insurance protection</strong>. 
                While many dashcams promise clear footage, reliable recording, and easy installation, finding one that actually delivers 
                sharp video, strong night vision, and long-lasting performance—without overheating, blurry images, or missing footage can be a challenge.
              </p>
              <p>
                <strong>We tested 24 dashcams</strong>, including models from Osmo, Garmin, Vantrue, Nextbase, and BlackVue. 
                The top five were rated based on the following criteria:
              </p>
              <p><strong>Video Quality</strong></p>
              <p>
                A dashcam should capture sharp, high-resolution footage in any lighting condition. 
                We tested video clarity, frame rate, and low-light performance to ensure clear recordings both day and night.
              </p>
              <p><strong>Night Vision Performance</strong></p>
              <p>
                Many accidents happen at night, making strong night vision technology essential. 
                We evaluated which models provide the best visibility in low-light conditions without grainy or washed-out footage.
              </p>
              <p><strong>Field of View</strong></p>
              <p>
                A wider field of view captures more details on the road. 
                We compared lens angles and distortion levels to find dashcams that cover multiple lanes without warping the image.
              </p>
              <p><strong>Storage and Loop Recording</strong></p>
              <p>
                A good dashcam should automatically overwrite old footage and support large memory cards. 
                We checked storage capacity, file management, and emergency recording features for the most reliable options.
              </p>
              <p><strong>Smart Features and Connectivity</strong></p>
              <p>
                Modern dashcams offer WiFi, GPS tracking, and app integration for easy access to footage. 
                We tested each model's connectivity, voice control, and parking mode capabilities.
              </p>
              <p><strong>After three weeks of testing here are top 5 choices:</strong></p>
            </div>
            
            <div className={styles.dividerWrapper}>
              <div className={styles.divider}></div>
            </div>
          </div>
          
          {/* Expert Box */}
          <div className={styles.expertBox}>
            <div className={styles.expertImageWrapper}>
              <img 
                src={expertAvatar} 
                className={styles.expertImage} 
                alt="Robert M - Tech Expert" 
              />
            </div>
            <div className={styles.expertContent}>
              <h3 className={styles.expertName}>Robert M - Tech Expert</h3>
              <p className={styles.expertDescription}>
                With 22 years of experience working with car gadgets, Robert knows everything there is about dashcams. 
                In this review, he tested various dashcams to find the most reliable ones.
              </p>
            </div>
          </div>
        </section>

        {/* Product Section - Osmo DashCam Pro */}
        <section className={styles.productSection}>
          <div className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.productHeaderEmpty}></div>
              <div className={styles.productTitleWrapper}>
                <h2 className={styles.productTitle}>
                  <a href="https://usa.osmo-official.com/pages/dashcam-pro-bf">1. Osmo DashCam Pro</a>
                </h2>
                <p className={styles.productSubtitle}>from Osmo</p>
              </div>
              <div className={styles.awardBadgeWrapper}>
                <img 
                  src={awardBadge} 
                  className={styles.awardBadge} 
                  alt="Health Consumer Review Award" 
                />
              </div>
            </div>
            
            <div className={styles.productContentRow}>
              <div className={styles.productImageBox}>
                <img 
                  src="https://avasreview.com/wp-content/uploads/2025/02/71xP8mhO5qL._AC_SL1500_.webp" 
                  className={styles.productImage} 
                  alt="Osmo DashCam Pro" 
                />
              </div>
              
              <div className={styles.ratingBox}>
                <div className={styles.ratingRow}>
                  <div className={styles.gradeBox}>
                    <span className={styles.gradeLabel}>Overall Grade</span>
                    <span className={styles.gradeValue}>A+</span>
                  </div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreLabel}>Rating</span>
                    <span className={styles.scoreValue}>9.8/10</span>
                    <div className={styles.starRating}>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analysisSection}>
                  <h3 className={styles.analysisTitle}>OVERALL ANALYSIS</h3>
                  <div className={styles.analysisText}>
                    <p>
                      The Osmo DashCam Pro stood out as our top choice due to its exceptional 4K video quality, 
                      advanced night vision, and seamless app integration. It features a wide 170° field of view, 
                      GPS tracking, and a parking mode that activates recording when motion is detected.
                    </p>
                    <p>
                      Installation is straightforward with its suction cup mount, and the built-in WiFi allows 
                      easy access to footage through the companion app.
                    </p>
                  </div>
                  
                  <div className={styles.progressWrapper}>
                    <span className={styles.progressLabel}>Customer Feedback & Satisfaction</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '97%' }}>
                        <span className={styles.progressPercent}>97%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.analysisSection}>
                <h3 className={styles.prosTitle}>Pros</h3>
                <div className={styles.prosGrid}>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>4K Ultra HD Recording</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Advanced Night Vision</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>170° Wide Angle</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>WiFi & App Integration</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>GPS Tracking</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Parking Mode</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Easy Installation</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Loop Recording</span>
                  </div>
                </div>
                
                <div className={styles.ctaWrapper}>
                  <a 
                    href="https://usa.osmo-official.com/pages/dashcam-pro-bf" 
                    className={styles.ctaButton}
                  >
                    Check Price
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.wrapupSection}>
              <h3 className={styles.wrapupTitle}>WRAP-UP</h3>
              <p className={styles.wrapupText}>
                The Osmo DashCam is fairly priced for a market-leading dash cam with innovative technology and HD visuals. 
                Take advantage of this limited-time discount while stocks last. Osmo offers a <strong>14-day money-back guarantee</strong> and free shipping. 
                The Osmo DashCam was unanimously voted the Best Dash Cam of 2026.
              </p>
            </div>
          </div>

          {/* Product 2 - Nextbase 622GW */}
          <div className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.productHeaderEmpty}></div>
              <div className={styles.productTitleWrapper}>
                <h2 className={styles.productTitle}>
                  <a href="https://example.com">2. Nextbase 622GW Dash Cam</a>
                </h2>
                <p className={styles.productSubtitle}>from Nextbase</p>
              </div>
              <div className={styles.productHeaderEmpty}></div>
            </div>
            
            <div className={styles.productContentRow}>
              <div className={styles.productImageBox}>
                <img 
                  src="https://avasreview.com/wp-content/uploads/2024/09/61MXa2JyjCL._AC_SL1000_.webp" 
                  className={styles.productImage} 
                  alt="Nextbase 622GW" 
                />
              </div>
              
              <div className={styles.ratingBox}>
                <div className={styles.ratingRow}>
                  <div className={styles.gradeBox}>
                    <span className={styles.gradeLabel}>Overall Grade</span>
                    <span className={styles.gradeValue}>B+</span>
                  </div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreLabel}>Rating</span>
                    <span className={styles.scoreValue}>8.8/10</span>
                    <div className={styles.starRating}>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starPartial}>★</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analysisSection}>
                  <h3 className={styles.analysisTitle}>OVERALL ANALYSIS</h3>
                  <div className={styles.analysisText}>
                    <p>
                      When we chose to shoot in 4K/30p, the resulting footage looked almost cinematic in its presentation, 
                      with extremely crisp definition and great detail, even in poor lighting.
                    </p>
                    <p>
                      A built-in polarizing filter on the front of the camera can be rotated to reduce glare from windscreens, 
                      while digital image stabilization is another first for the dash cam market.
                    </p>
                  </div>
                  
                  <div className={styles.progressWrapper}>
                    <span className={styles.progressLabel}>Customer Feedback & Satisfaction</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '78%' }}>
                        <span className={styles.progressPercent}>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.analysisSection}>
                <h3 className={styles.prosTitle}>Pros</h3>
                <div className={styles.prosGrid}>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Advanced features</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Easy to use</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>1080p HD image</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Zoom in feature</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Easy to set up</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Alexa compatible</span>
                  </div>
                </div>
                
                <div className={styles.ctaWrapper}>
                  <a 
                    href="https://example.com" 
                    className={styles.ctaButton}
                  >
                    Check Price
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 - Garmin Dash Cam 67W */}
          <div className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.productHeaderEmpty}></div>
              <div className={styles.productTitleWrapper}>
                <h2 className={styles.productTitle}>
                  <a href="https://example.com">3. Garmin Dash Cam 67W</a>
                </h2>
                <p className={styles.productSubtitle}>from Garmin</p>
              </div>
              <div className={styles.productHeaderEmpty}></div>
            </div>
            
            <div className={styles.productContentRow}>
              <div className={styles.productImageBox}>
                <img 
                  src="https://avasreview.com/wp-content/uploads/2024/09/71LWsWPy2JL._AC_SL1500_.webp" 
                  className={styles.productImage} 
                  alt="Garmin Dash Cam 67W" 
                />
              </div>
              
              <div className={styles.ratingBox}>
                <div className={styles.ratingRow}>
                  <div className={styles.gradeBox}>
                    <span className={styles.gradeLabel}>Overall Grade</span>
                    <span className={styles.gradeValue}>B</span>
                  </div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreLabel}>Rating</span>
                    <span className={styles.scoreValue}>8.2/10</span>
                    <div className={styles.starRating}>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starPartial}>★</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analysisSection}>
                  <h3 className={styles.analysisTitle}>OVERALL ANALYSIS</h3>
                  <div className={styles.analysisText}>
                    <p>
                      The Garmin Dash Cam 67W offers excellent build quality and reliable performance. 
                      Its compact design makes it easy to mount discreetly behind your rearview mirror.
                    </p>
                    <p>
                      The 180-degree field of view captures more of the road than most competitors, 
                      and the voice control feature works surprisingly well.
                    </p>
                  </div>
                  
                  <div className={styles.progressWrapper}>
                    <span className={styles.progressLabel}>Customer Feedback & Satisfaction</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '72%' }}>
                        <span className={styles.progressPercent}>72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.analysisSection}>
                <h3 className={styles.prosTitle}>Pros</h3>
                <div className={styles.prosGrid}>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Compact design</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Voice control</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>180° field of view</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Cloud storage</span>
                  </div>
                </div>
                
                <div className={styles.ctaWrapper}>
                  <a 
                    href="https://example.com" 
                    className={styles.ctaButton}
                  >
                    Check Price
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 4 - Vantrue N4 */}
          <div className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.productHeaderEmpty}></div>
              <div className={styles.productTitleWrapper}>
                <h2 className={styles.productTitle}>
                  <a href="https://example.com">4. Vantrue N4</a>
                </h2>
                <p className={styles.productSubtitle}>from Vantrue</p>
              </div>
              <div className={styles.productHeaderEmpty}></div>
            </div>
            
            <div className={styles.productContentRow}>
              <div className={styles.productImageBox}>
                <img 
                  src="https://avasreview.com/wp-content/uploads/2024/09/81dBs6hOmPL._AC_SL1500_.webp" 
                  className={styles.productImage} 
                  alt="Vantrue N4" 
                />
              </div>
              
              <div className={styles.ratingBox}>
                <div className={styles.ratingRow}>
                  <div className={styles.gradeBox}>
                    <span className={styles.gradeLabel}>Overall Grade</span>
                    <span className={styles.gradeValue}>B-</span>
                  </div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreLabel}>Rating</span>
                    <span className={styles.scoreValue}>7.5/10</span>
                    <div className={styles.starRating}>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starPartial}>★</span>
                      <span className={styles.starPartial}>★</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analysisSection}>
                  <h3 className={styles.analysisTitle}>OVERALL ANALYSIS</h3>
                  <div className={styles.analysisText}>
                    <p>
                      The Vantrue N4 is a three-channel dash cam that records front, inside, and rear simultaneously. 
                      Great for rideshare drivers and those who want complete coverage.
                    </p>
                    <p>
                      While the build quality is solid, the interface can be a bit complicated for first-time users.
                    </p>
                  </div>
                  
                  <div className={styles.progressWrapper}>
                    <span className={styles.progressLabel}>Customer Feedback & Satisfaction</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '68%' }}>
                        <span className={styles.progressPercent}>68%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.analysisSection}>
                <h3 className={styles.prosTitle}>Pros</h3>
                <div className={styles.prosGrid}>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Three-channel recording</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>IR night vision</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>24-hour parking mode</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>GPS capable</span>
                  </div>
                </div>
                
                <div className={styles.ctaWrapper}>
                  <a 
                    href="https://example.com" 
                    className={styles.ctaButton}
                  >
                    Check Price
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 5 - BlackVue DR900X-2CH */}
          <div className={styles.productCard}>
            <div className={styles.productHeader}>
              <div className={styles.productHeaderEmpty}></div>
              <div className={styles.productTitleWrapper}>
                <h2 className={styles.productTitle}>
                  <a href="https://example.com">5. BlackVue DR900X-2CH</a>
                </h2>
                <p className={styles.productSubtitle}>from BlackVue</p>
              </div>
              <div className={styles.productHeaderEmpty}></div>
            </div>
            
            <div className={styles.productContentRow}>
              <div className={styles.productImageBox}>
                <img 
                  src="https://avasreview.com/wp-content/uploads/2024/09/61Z8L5nfaL._AC_SL1500_.webp" 
                  className={styles.productImage} 
                  alt="BlackVue DR900X-2CH" 
                />
              </div>
              
              <div className={styles.ratingBox}>
                <div className={styles.ratingRow}>
                  <div className={styles.gradeBox}>
                    <span className={styles.gradeLabel}>Overall Grade</span>
                    <span className={styles.gradeValue}>C+</span>
                  </div>
                  <div className={styles.scoreBox}>
                    <span className={styles.scoreLabel}>Rating</span>
                    <span className={styles.scoreValue}>7.0/10</span>
                    <div className={styles.starRating}>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starFull}>★</span>
                      <span className={styles.starPartial}>★</span>
                      <span className={styles.starPartial}>★</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.analysisSection}>
                  <h3 className={styles.analysisTitle}>OVERALL ANALYSIS</h3>
                  <div className={styles.analysisText}>
                    <p>
                      The BlackVue DR900X-2CH is a premium option with cloud connectivity and remote access. 
                      You can view your footage from anywhere using the BlackVue app.
                    </p>
                    <p>
                      However, the high price point and subscription requirement for cloud features 
                      make it less accessible for budget-conscious buyers.
                    </p>
                  </div>
                  
                  <div className={styles.progressWrapper}>
                    <span className={styles.progressLabel}>Customer Feedback & Satisfaction</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: '65%' }}>
                        <span className={styles.progressPercent}>65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.analysisSection}>
                <h3 className={styles.prosTitle}>Pros</h3>
                <div className={styles.prosGrid}>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Cloud connectivity</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Remote access</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>4K front camera</span>
                  </div>
                  <div className={styles.proItem}>
                    <img src={checkmark} className={styles.checkIcon} alt="Check" />
                    <span className={styles.proText}>Premium build</span>
                  </div>
                </div>
                
                <div className={styles.ctaWrapper}>
                  <a 
                    href="https://example.com" 
                    className={styles.ctaButton}
                  >
                    Check Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
