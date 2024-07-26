import React from "react";
import projectOne from "../imgs/projectOne.jpg";
import secondProject from "../imgs/phone-store.jpg";
import thirdProject from "../imgs/beach-resort.jpg";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <h6 className="section-title mb-6">Portfolio</h6>
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://yazan-web-agency.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-card"
            >
              <img
                src={projectOne}
                width="200"
                height="295"
                className="portfolio-card-img"
                alt="Yazan Othman"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Agency</h4>
                  <p className="font-weight-normal">Category: HTML&CSS</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://yazan-phone-store.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-card"
            >
              <img
                className="portfolio-card-img"
                src={secondProject}
                width="200"
                height="295"
                alt="Yazan Othman"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Phone Store</h4>
                  <p className="font-weight-normal">Category: React</p>
                </span>
              </span>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://yazan-beach-resort-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-card"
            >
              <img
                className="portfolio-card-img img-responsive rounded"
                src={thirdProject}
                width="200"
                height="295"
                // className="img-responsive rounded"
                alt="Yazan Othman"
              />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Beach Resort</h4>
                  <p className="font-weight-normal">Category: React</p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
