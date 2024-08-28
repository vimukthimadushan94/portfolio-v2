export default function Hero() {
  return (
    <section id="hero" className="hero section light-background">
      <img src="assets/img/hero-bg.jpg" alt="" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Brandon Johnson</h2>
            <p>
              Im
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              >
                Designer
              </span>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              ></span>
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
