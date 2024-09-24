import config from "@config/config.json";
import { dateFormat } from "@lib/utils/dateFormat";
import Link from "next/link";
const { blog_folder } = config.settings;

const Resume = ({ resume }) => {
  return (
    <section id="resume" className="resume container px-8">
      <div className="section-title container text-center">
        <h2>Resume</h2>
        {/* <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p> */}
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid-cols-1">
            <h3 className="resume-title">Sumary</h3>

            <div className="resume-item pb-0">
              <h4 className="text-gray-200">Vimukthi Madushan</h4>
              <p>
                <em>
                  I am a software engineer having a full-time work visa in
                  Finland. With over four years of practical experience in
                  full-stack development, I am skilled in planning, developing,
                  and implementing cloud software solutions. As a team player, I
                  contribute to cross-functional success. Committed to
                  continuous learning, I have a strong foundation in software
                  engineering concepts and enjoy exploring and applying
                  cutting-edge technological advancements.
                </em>
              </p>
              <ul>
                <li>Oulu, Finland</li>
                <li>(+358)415765303</li>
                <li>madushan.gangoda94@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4 className="text-gray-200">BACHELOR OF SCIENCE</h4>
              <h6>University Of Ruhuna, Sri Lanka (2015 - 2018)</h6>
              <p>Field of study : Computer Science, Mathematics, Physics</p>
            </div>

            <div className="resume-item">
              <h4 className="text-gray-200">
                Finnish Integration Cource in OSAO - Continkangas
              </h4>
              <h5>2024 - Present</h5>
              <p>Studing finnish language and culture</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4 className="text-gray-200">SOFTWARE ENGINEER</h4>
              <h5>Jul. 2021 - Aug 2023</h5>
              <p>
                <em>Elegant Media PVT LTD - Colombo, Sri Lanka</em>
              </p>
              <ul>
                <li>
                  Elegant Media is a leading Web and Mobile application
                  development company in Melbourne, Australia. My responsibility
                  was to develop scalable and reliable backend and web
                  applications with the relevant team. There i am responsible
                  for,
                </li>
                <li>Cording, proper technology selection and usage.</li>
                <li>
                  Creating standard operating procedures for repetitive work and
                  distributing them for team members.
                </li>
                <li>
                  Maintaining libraries, conducting training sessions, R&D, and
                  conducting feasibility assessments
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4 className="text-gray-200">SOFTWARE ENGINEER</h4>
              <h5>Feb 2021 - Jul 2021</h5>
              <p>
                <em>Incubate Labs - Colombo, Sri Lanka</em>
              </p>
              <ul>
                <li>
                  Collaborate with a cross-functional team to develop and launch
                  the CloudOfGoods website.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4 className="text-gray-200">SOFTWARE ENGINEER</h4>
              <h5>Nov 2018 - Fed 2021</h5>
              <p>
                <em>Weblook International - Colombo, Sri Lanka</em>
              </p>
              <ul>
                <li>
                  Developing a hotel booking engine as a product of Weblook with
                  the Beds24 channel manager.
                </li>
                <li>
                  Developing a food ordering system and mobile API for a
                  Canadian client with the Express framework.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
