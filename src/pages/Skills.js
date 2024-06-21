import React from "react";

const skills = [
  { icon: "fab fa-html5", name: "HTML", bg: "bg-1" },
  { icon: "fab fa-css3-alt", name: "CSS", bg: "bg-2" },
  { icon: "fab fa-js", name: "JavaScript", bg: "bg-3" },
  { icon: "fa-brands fa-java", name: "Java", bg: "bg-4" },
  { icon: "fab fa-react", name: "React", bg: "bg-5" },
  { icon: "fa-brands fa-node", name: "NodeJS", bg: "bg-6" },
  { icon: "fa-brands fa-android", name: "Android ", bg: "bg-1" },
  { icon: "fa-brands fa-app-store-ios", name: "IOS", bg: "bg-2" },
  { icon: "fa fa-database", name: "Mngo DB", bg: "bg-3" },
  // { icon: "fa-brands fa-postgresql", name: "PostgreSQL", bg: "bg-1" },
  // { icon: "fa-brands fa-mysql", name: "MySQL", bg: "bg-6" },

  { icon: "fa-brands fa-docker", name: "Docker", bg: "bg-4" },
  { icon: "fa-brands fa-aws", name: "AWS", bg: "bg-5" },
  // { icon: "fa-brands fa-azure", name: "Azure", bg: "bg-6" },
  { icon: "fa-brands fa-google", name: "Google Cloud", bg: "bg-6" },
  { icon: "fa-brands fa-java", name: "Java", bg: "bg-1" },
  { icon: "fa-brands fa-php", name: "PHP", bg: "bg-2" },
  { icon: "fa-brands fa-bootstrap", name: "Bootstrap", bg: "bg-3" },
  { icon: "fa-brands fa-git", name: "Git", bg: "bg-4" },
  { icon: "fa-brands fa-github", name: "GitHub", bg: "bg-5" },
  { icon: "fa-brands fa-npm", name: "npm", bg: "bg-6" },
  // { icon: "fa-brands fa-redis", name: "Redis", bg: "bg-3" },
  // { icon: "fa-brands fa-kubernetes", name: "Kubernetes", bg: "bg-6" },
];
const Skills = () => {
  return (
    <>
      <section
        data-scroll-index="2"
        className="section experience-section non-selectable"
        id="skill"
      >
        <div className="container ">
          <div className="row gy-6  ">
            <div className="col-lg-12">
              <div className="section-heading">
                <h3 className="m-0">
                  <span>My Skills</span>
                </h3>
              </div>
              <div className="skill-box">
                <div className="row g-4">
                  {skills.map((skills, index) => (
                    <div className="col-6 first-letter:col-md-4 col-lg-3">
                      <div
                        key={index}
                        className={`feature-box-02 ${skills.bg}`}
                      >
                        <div className="icon">
                          <i className={skills.icon} />
                        </div>
                        <h6>{skills.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
