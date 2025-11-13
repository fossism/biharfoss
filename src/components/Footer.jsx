export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-section container">
        <div className="footer-container">
          <div className="footer-element-logo">
            <img alt="BiharFOSS Logo" src="/files/biharfoss-white.svg" />
          </div>
          <div className="source-code-link">
            <a target="blank" href="https://github.com/biharfoss/">
              <i className="ti ti-brand-github"></i>
              View Source Code
            </a>
          </div>
          <div className="footer-element-items">
            <div className="footer-link-category">
              <div className="footer_parent_label">
                <p>About Us</p>
                <div className="footer-category-items">
                  <a className="footer-link" href="/team">
                    Team
                  </a>
                  <a className="footer-link" href="/fossclubs">
                    FOSS Clubs
                  </a>
                  <a className="footer-link" href="/industry-partners">
                    Industry Partners
                  </a>
                  <a className="footer-link" href="/GSoC">
                    GSoC
                  </a>
                  <a className="footer-link" href="/non-profit">
                    Non-Profit
                  </a>
                  <a className="footer-link" href="mailto:foundation@biharfoss.org">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="footer_parent_label">
                <p>Stay in touch</p>
                <div className="footer-category-items">
                  <a className="footer-link" href="/blogs">
                    Blogs
                  </a>
                  <a className="footer-link" href="https://fossunited.org/rss.xml">
                    RSS Feed
                  </a>
                  <a className="footer-link" href="/newsletter">
                    Newsletter
                  </a>
                  <a className="footer-link" href="https://forum.fossunited.org">
                    Discourse Forum
                  </a>
                  <a className="footer-link" href="https://t.me/fossunitedbihar">
                    Telegram Group
                  </a>
                </div>
              </div>
              <div className="footer_parent_label">
                <p>Social Media</p>
                <div className="footer-category-items">
                  <a
                    className="footer-link"
                    href="https://in.linkedin.com/company/foss-united-bihar"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footer-link"
                    href="https://instagram.com/fossunitedbihar"
                  >
                    Instagram
                  </a>
                  <a className="footer-link" href="http://x.com/fossunitedbihar">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="address-element">
              <p>BiharFOSS Foundation. CC-BY-SA.</p>
              <div className="ql-editor read-mode">
                <p>................</p>
                <p>To Be Announced.</p>
              </div>
              <div className="social-media-credits">
                <div className="social-category-items">
                  <a
                    aria-label="Visit our Twitter page"
                    className="footer-link"
                    href="http://x.com/fossunitedbihar"
                  >
                    <img alt="Twitter" src="Twitter (1).svg" />
                  </a>

                  <a
                    aria-label="Visit our Linkedin page"
                    className="footer-link"
                    href="https://in.linkedin.com/company/foss-united-bihar"
                  >
                    <img alt="Linkedin" src="LinkedIn (1).svg" />
                  </a>
                  <a
                    aria-label="Visit our Instagram page"
                    className="footer-link"
                    href="https://instagram.com/fossunitedbihar"
                  >
                    <img alt="Instagram" src="instagram.svg" />
                  </a>
                </div>
                <div className="powered-by">
                  <p>Built by BiharFOSS community ❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
