import { FaPlus } from "react-icons/fa";

const Card = () => {
  return (
    <article className="col-md-6 col-lg-4 mb-5">
      <section
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <section className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <FaPlus />
          </div>
        </section>
        <img
          className="img-fluid"
          src="assets/img/portfolio/cabin.png"
          alt="..."
        />
      </section>
    </article>
  );
};
export default Card;
