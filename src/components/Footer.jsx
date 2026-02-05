import siteLogo from '../assets/site-logo.png';

function Footer() {
  return (
    <footer id="site-footer" className="site-footer dynamic-footer ">
<div className="footer-inner">
<div className="site-branding show-logo">
<div className="site-logo hide">
<a href="https://avasreview.com/" className="custom-logo-link" rel="home"><img width="90" height="97" src={siteLogo} className="custom-logo" alt="Ava's Review" decoding="async" /></a></div>
</div>


<div className="copyright hide">
<p>All rights reserved</p>
</div>
</div>
</footer>
  );
}

export default Footer;
