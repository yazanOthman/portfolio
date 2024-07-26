import React, { useState } from "react";
import data from "../data";
import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = () => {
  const [value, setValue] = useState(0);

  const { company, duties, dates, title } = data[value];

  return (
    <section className="section" id="experience">
      <div className="container">
        <h6 className="section-title mb-6 text-center">Experiences</h6>
        <div className="jobs-center">
          <div className="btn-container">
            {data.map((job, index) => (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duity) => (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duity}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
