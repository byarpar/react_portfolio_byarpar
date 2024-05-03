import { content } from "../Content";
import './Hireme.css'; 
import './Projects.css'
const Projects = () => {
  const { Projects } = content;
  return (
    <section className="md:container px-5 pt-15" id="projects">
      <div className="flex flex-col justify-between ">
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
              className="bg-white rounded-3xl p-5 border btn bg-dark_primary text-white border-animation"
              data-aos="fade-up"
            >
              <div className="relative overflow-hidden rounded-lg mb-2" style={{ paddingTop: '56.25%' }}>
                <img
                  src={content.image}
                  alt="Project Slide"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  
                />
              </div>
              <h5 className="font-bold text-lg mb-1 " style={{ color: 'black' }}>
                {content.title}
              </h5>
              <h5 className="font-bold text-lg mb-1">{content.title1}</h5>
              <p className="text-sm mb-4 ">{content.titless}</p>
              <br/>   
              <h5 className="font-bold text-lg mb-1 " style={{ color: '#8a2d15b0' }}>
                {content.titles}
              </h5>
              <div className="flex justify-between w-full">
                
                <a
                  href={content.codeLink}
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 bg-transparent btn bg-dark_primary text-white  button "
                  style={{zoom: '80%',width:'45%', minWidth: '100px', height: 'auto', padding: '10px' }}
                >
                  View Code
                </a>
                {content.websiteLink && (
                  <a
                    href={content.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 bg-transparent btn bg-red_primary text-white button "
                    style={{zoom: '80%',width:'45%', minWidth: '100px', height: 'auto', padding: '10px' }}
                  >
                    Visit Website
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