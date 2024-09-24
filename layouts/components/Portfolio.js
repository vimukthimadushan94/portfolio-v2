import Image from "next/image";

const Portfolio = ({ resume }) => {
  return (
    <section id="portfolio" className="portfolio section px-8">
      <div className="section-title container" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Here are a few projects I have developed independently.</p>
      </div>
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="gy-4 isotope-container row grid grid-cols-1 gap-4 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <a
                href="https://mymaster.lk/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/mymaster.jpg"
                  width={420}
                  height={500}
                  alt="Picture of the author"
                />
                <div className="portfolio-info">
                  <p>Self Learning Material Platform</p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <a
                href="https://pentium2000.lk/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/pentium-pastal.jpg"
                  width={420}
                  height={500}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <p>Pentium 2000 Stationery Company</p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <a
                href="http://tuktukceylonride.com/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/tuktuk.jpg"
                  width={420}
                  height={500}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <p>Tuk Tuk CeylonRide</p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <a
                href="https://heslaatours.com/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/heslaa.jpg"
                  width={420}
                  height={500}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <p>Heslaa Tours</p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <a
                href="https://baranassrilanka.com/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/baranas.jpg"
                  width={420}
                  height={500}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <p>Baranas Sri Lanka</p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <a
                href="https://www.enrichtea.com/"
                target="__blank"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <Image
                  src="/images/webworks/enrich-website.jpg"
                  width={420}
                  height={500}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <p>Enrich tea and food exports</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
