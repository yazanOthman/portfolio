import React from "react";

import angularIcon from "../imgs/angular-icon.svg";
import reactIcon from "../imgs/react-js-icon.svg";
import htmlIcon from "../imgs/html5-outline-icon.svg";
import javascriptIcon from "../imgs/js-file-icon.svg";

const Stack = () => {
  return (
    <section className="section" id="stack">
      <div className="container text-center">
        <h6 className="section-title mb-6">Tech Stack</h6>
        <div className="row">
          <div className="col-md-6 col-lg-6 mb-5">
            <div className="service-card">
              <div className="body">
                <img src={htmlIcon} alt="Yazan Othman" className="icon" />
                <h6 className="title">HTML&CSS</h6>
                <p className="subtitle p-2">
                  Proficient in HTML and CSS, with expertise in developing
                  visually engaging and responsive websites for enhanced user
                  experiences
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-5">
            <div className="service-card">
              <div className="body">
                <img src={javascriptIcon} alt="Yazan Othman" className="icon" />
                <h6 className="title">Javascript</h6>
                <p className="subtitle p-2">
                  Skilled in JavaScript, developing interactive and dynamic web
                  applications with a strong focus on smooth user interactions
                  and functionality
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-5">
            <div className="service-card">
              <div className="body">
                <img src={reactIcon} alt="Yazan Othman" className="icon" />
                <h6 className="title">React</h6>
                <p className="subtitle p-2">
                  Experienced in React, I specialize in building efficient and
                  interactive front-end applications with a focus on
                  component-based architecture
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-5">
            <div className="service-card">
              <div className="body">
                <img src={angularIcon} alt="Yazan Othman" className="icon" />
                <h6 className="title">Angular</h6>
                <p className="subtitle p-2">
                  Proficient in Angular, I create efficient and interactive
                  front-end applications, leveraging component-based
                  architecture for superior performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
