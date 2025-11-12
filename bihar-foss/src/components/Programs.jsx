export default function Programs() {
  return (
    <section id="about" className="about">
      <h2>Programs</h2>
      <div className="about-grid">
        <div className="about-card">
          <img alt="City Communities" src="Communities.svg" />
          <h3>Community</h3>
          <p>
            We are willing to organise FOSS events in the different city of
            Bihar.
          </p>
        </div>
        <div className="about-card">
          <img alt="FOSS Clubs " src="FOSS Club.svg" />
          <h3>FOSS Clubs</h3>
          <p>
            Explore our initiatives in Bihar to make each district has their own
            FOSS Club to promote Open Source culture among students.
          </p>
        </div>
        <div className="about-card">
          <img
            height="55px"
            alt="GSoC"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/500px-Google_Summer_of_Code_sun_logo_2022.svg.png"
          />
          <h3>Google Summer of Code</h3>
          <p>
            Google Summer of Code is a global, online program focused on
            bringing new contributors into open source software development.
          </p>
        </div>
      </div>
    </section>
  );
}
