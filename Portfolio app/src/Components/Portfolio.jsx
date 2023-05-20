import { FaStar } from "react-icons/fa";
import Card from "./Card";

const Portfolio = () => {
  return (
    <article className="page-section portfolio" id="portfolio">
      <section className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          my Projects
        </h2>

        <section className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FaStar />
          </div>
          <div className="divider-custom-line"></div>
        </section>
        <div className="row justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </article>
  );
};
export default Portfolio;
