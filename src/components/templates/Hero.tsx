import Image from "next/image";
import Slider, { Settings as SlickSettings } from "react-slick";

export default function Hero() {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings}>
        <div>
          <Image
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
      </Slider>
    </section>
  );
}
