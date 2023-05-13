import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car from "./Car";

const CarCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      containerClass="carousel-container"
    >
      <Car price="50$" image="/ford.png"model="Focus" mark="Focus" year="2019" doors="4" transmission="Manual" fuel="Gasoline"/>
      <Car price="55$" image="/lexus.png"model="LX" mark="Lexus" year="2022" doors="4" transmission="Auto" fuel="Gasoline" />
      <Car price="45$" image="/honda-car.png"model="Civic" mark="Honda" year="2019" doors="4" transmission="Auto" fuel="Gasoline" />
      <Car price="66$" image="/audi.png"model="A3" mark="Audi" year="2019" doors="4" transmission="Manual" fuel="Gasoline"/>
      <Car price="80$" image="/maserati.png"model="Quattroporte" mark="Maserati" year="2019" doors="4" transmission="Manual" fuel="Gasoline"/>
    </Carousel>
  );
};

export default CarCarousel;