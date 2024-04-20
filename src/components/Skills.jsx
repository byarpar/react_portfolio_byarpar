import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 btn bg-dark_primary text-white"
            >
              <div>
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                ) : (
                  <span>{skill.name}</span>
                )}
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
          {/* Adding Soft Skills */}
          <div className="w-full text-center mt-8">
            <h3 className="text-xl font-bold">Soft Skills</h3>
          </div>
          <div
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 btn bg-dark_primary text-white"
            data-aos="fade-up"
            data-aos-delay={skills.skills_content.length * 400}
          >
            
            <div>
              <h6>Communication</h6>
             
            </div>
          </div>
          
          <div
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 btn bg-dark_primary text-white"
            data-aos="fade-up"
            data-aos-delay={skills.skills_content.length * 400 + 800}
          >
           
            <div>
              <h6>Problem Solving</h6>
             
            </div>
          </div>
          <div
            className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 btn bg-dark_primary text-white"
            data-aos="fade-up"
            data-aos-delay={skills.skills_content.length * 400 + 1200}
          >
            
            <div>
              <h6>Decision Making</h6>
             
            </div>
          </div>
         
          
          {/* End of Soft Skills */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
