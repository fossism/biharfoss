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
          <img alt="GSoC" src="" />
          <h3>GSoC</h3>
          <p>
            Google Summer of Code is a global, online program focused on
            bringing new contributors into open source software development.
            GSoC Contributors work with an open source organization on a 12+
            week programming project under the guidance of mentors.
          </p>
        </div>
      </div>
    </section>
  );
}
