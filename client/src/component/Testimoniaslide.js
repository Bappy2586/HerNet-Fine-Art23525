import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "../assets/test.png"; 
import Explore1 from "../assets/artis2.png"; 
import Explore2 from "../assets/artis.jpg"; 

const testimonials = [
  {
    text: "Working with this team was an absolute pleasure. Their professionalism, attention to detail, and dedication made all the difference in our project!",
    name: "John Doe",
    role: "CEO, Example Corp",
    image: Explore, 
  },
  {
    text: "Their service exceeded my expectations. Highly recommended for anyone looking for quality work!",
    name: "Jane Smith",
    role: "Marketing Director, ABC Ltd",
    image: Explore1, 
  },
  {
    text: "Amazing experience! The results were outstanding and delivered on time. Couldn't ask for more.",
    name: "Michael Johnson",
    role: "Founder, Startup XYZ",
    image: Explore2, 
  },
];

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <table className="table">
                <tr>
                    <td>
                        <div>
                            <p className="mt-3" style={{color:"#000", fontWeight: "800"}}>{testimonial.name}</p>
                            <span className="text-gray-500 text-sm">{testimonial.role}</span>
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img className="w-24 h-24 rounded-full mx-auto" src={testimonial.image} alt={testimonial.name} style={{borderRadius:"10px"}}/>
                        </div>
                    </td>
                </tr>
            </table>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
