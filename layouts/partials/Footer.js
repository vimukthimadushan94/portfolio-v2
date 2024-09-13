import config from "@config/config.json";
import Social from "@layouts/components/Social";
import { markdownify } from "@lib/utils/textConverter";
import social from "@config/social.json";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Vimukthi Madushan</h3>
        <div className="social-links flex justify-center">
          <Social source={social} className="profile-social-icons mt-8" />
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span>
            <strong className="sitename px-1">Alex Smith</strong>
            <span>
              All Rights Reserved {markdownify(copyright, "p", "text-text")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
