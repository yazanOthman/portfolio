import React from "react";

const About = () => {
  return (
    <section className="section pt-0" id="about">
      <div className="container text-center">
        <div className="about text-center">
          <div className="about-caption">
            <h2 className="section-title mb-3 ">About Me</h2>
            <p>
              An ambitious Front-End Developer with extensive hands-on
              proficiency in web and hybrid mobile app development. Eager to
              enhance core web functionalities and committed to continuous
              learning. A rapid learner adept at assimilating new concepts, with
              strong communication skills. I am the type of person who is
              disciplined, reliable and great on a team.
            </p>
            <p>
              Outside of my tech pursuits, I love pushing myself through various
              challenges, whether engaging in intense workouts at the gym, or
              exploring nature. I also have a passion for reading, which keeps
              me constantly learning and evolving. I’m excited about the unknown
              paths my journey might take, and I'm always open to new adventures
              and opportunities that come my way.
            </p>
            <button
              className="btn-rounded btn btn-outline-primary mt-4"
              onClick={(e) => {
                window.open(
                  "https://drive.google.com/file/d/1cyc4EgzO5kMGijkWaqQ11mCec7temlKw/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
