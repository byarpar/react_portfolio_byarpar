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
              className="bg-white rounded-xl shadow-xl p-6 border btn bg-dark_primary text-white flex flex-col  border-animation"
              data-aos="fade-up"
            >
             
             <div className="mx-auto">
                <img
                  src={testimonial.img}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
                
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="font-bold mb-1">{testimonial.name}</h6>
                  <h1 className="sm:text-base text-sm">{testimonial.reviewss}</h1>
                  <p className="text-sm mb-4">{testimonial.review}</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{testimonial.reviews}</p>
                  <button
                    className="mt-2 text-blue-500 bg-transparent btn bg-dark_primary text-white button"
                    onClick={() => window.open(testimonial.certificate_link, "_blank")}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


