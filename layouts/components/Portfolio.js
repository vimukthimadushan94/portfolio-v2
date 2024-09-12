import Image from "next/image";

const Portfolio = ({ resume }) => {
  return (
    <section id="portfolio" className="portfolio section px-8">
      <div className="section-title container" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div
            className="gy-4 isotope-container row grid grid-cols-1 gap-4 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <Image
                src="/images/webworks/mymaster.jpg"
                width={420}
                height={500}
                alt="Picture of the author"
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <Image
                src="/images/webworks/pentium-pastal.jpg"
                width={420}
                height={500}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="/img/webworks/mymaster.jpg"
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <Image
                src="/images/webworks/tuktuk.jpg"
                width={420}
                height={500}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <Image
                src="/images/webworks/heslaa.jpg"
                width={420}
                height={500}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  title="App 2"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <Image
                src="/images/webworks/baranas.jpg"
                width={420}
                height={500}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  title="Product 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <Image
                src="/images/webworks/enrich-website.jpg"
                width={420}
                height={500}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
