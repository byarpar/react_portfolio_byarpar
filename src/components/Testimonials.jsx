import { content } from "../Content";

const Testimonials = () => {
  const { testimonials_content, title, subtitle } = content.Testimonials;

  return (
    <section>
      <div className="md:container px-5 pt-14" id="education">
        <h2 className="title" data-aos="fade-down">
          {title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {subtitle}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials_content.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border btn bg-dark_primary text-white"
              data-aos="fade-up"
            >
              <img src={testimonial.img} alt="Avatar" className="h-24 mb-4" />
              <h1 className="sm:text-base text-sm">{testimonial.reviewss}</h1>
                <h3 className="sm:text-base text-sm">{testimonial.reviews}</h3>
                  <p className="sm:text-base text-sm">{testimonial.review}</p>
                  <br />
                  <h6>{testimonial.name}</h6>
              <button 
                className="mt-4 text-blue-500 bg-transparent btn bg-dark_primary text-white "
                onClick={() => window.open(testimonial.certificate_link, "_blank")}
              >
                View Certificate
              </button>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
