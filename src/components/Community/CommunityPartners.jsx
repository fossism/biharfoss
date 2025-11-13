export default function CommunityPartners() {
  return (
    <section
      className="section"
      data-section-idx="5"
      data-section-template="Home Page - Industry Partnership"
    >
      <div className="ip-section container">
        <div className="ip-container">
          <div className="ip-content-block">
            <img alt="ip-handshake" src="handshake.svg" />
            <div>
              <h5>Industry Partnership</h5>
              <p>
                The foundation was started as a collaboration between the teams
                at Frappe, the publisher of ERPNext, one of the largest FOSS
                projects out of India, and Zerodha. Currently we have two more
                partners supporting us, and we invite more organisations to join
                the movement.
              </p>
            </div>
            <a href="industry-partners">View Current Partners ↗</a>
          </div>
          <div className="ip-partners-block">
            <div className="feature-partners">
              <a href="https://zerodha.com">
                <img alt="Zerodha" src="Industry Partners Sizing (2).png" />
              </a>
              <a href="https://samagata.org/">
                <img alt="Samagata Foundation" src="Samagatha.png" />
              </a>
              <a href="https://frappe.io">
                <img alt="Frappe" src="frappebd848e.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
