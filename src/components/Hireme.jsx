import { content } from "../Content";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary" id="Hireme">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            {/* Anchor tag for the link */}
            <a href="https://drive.google.com/file/d/1_aDRdtqnI_Nr2HaUaIWZVKi6nzqTZnRb/view?usp=sharing" className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </a>
            <div className="mt-4 flex gap-4">
              {/* LinkedIn Icon with Link */}
              <a href="https://www.linkedin.com/in/byar-par/">
                <FaLinkedin size={24} />
              </a>
              {/* Email Icon with Link */}
              <a href="mailto:byarpar0@email.com">
                <MdEmail size={24} />
              </a>
             
              
              {/* Instagram Icon with Link */}
              <a href="https://www.instagram.com/byar.par/">
                <FaInstagram size={24} />
              </a>
              {/* Facebook Icon with Link */}
              <a href="https://www.facebook.com/key.bee26">
                <FaFacebook size={24} />
              </a>
            
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
