import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="md:container px-5 py-14" id="projects">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.project_content.map((content, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 border  btn bg-dark_primary text-white"
              data-aos="fade-up"
            >
              <img src={content.image} alt="Project Slide" className="rounded-lg mb-2" />
              <h5 className="font-bold text-lg mb-1">{content.title}</h5>
              <h5 className=" ">{content.titles}</h5>

              <div className="flex justify-between w-full">
                <a
                  href={content.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-dark_primary text-white"
                >
                  View Code
                </a>
                {content.websiteLink && (
                  <a
                    href={content.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-dark_primary text-white"
                  >
                    View Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
