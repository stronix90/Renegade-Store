import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "./brands.css";

const brandsArray = [
  {
    img: "https://www.pngmart.com/files/4/Razer-Logo-Transparent-Background.png",
    text: "Logo Razer",
  },
  {
    img: "https://i.pinimg.com/originals/a4/10/68/a41068b195a5d7049e9c649938827fd3.png",
    text: "Logo Alienware",
  },
  {
    img: "http://centroamericaycaribeit.com/wp-content/uploads/2020/05/OMEN_logo_horiz_rgb_gradblack.png",
    text: "Logo Omen",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2021/02/Corsair-Logo.png",
    text: "Logo Corsair",
  },
  {
    img: "https://seeklogo.com/images/R/rog-republic-of-gamers-logo-84B39C08CE-seeklogo.com.png",
    text: "Logo Republic of gamers",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2021/05/Acer-Predator-logo.png",
    text: "Logo Predator",
  },
  {
    img: "https://www.seekpng.com/png/full/212-2126872_origin-pc-steam-key-bundle-origin-pc-logo.png",
    text: "Logo Origin",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2020/03/MSI-Logo-2011.png",
    text: "Logo MSI",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2020/02/Intel-Logo-2005.png",
    text: "Logo Intel",
  },
  {
    img: "https://www.1sourcevideo.com/shop/pub/media/wysiwyg/brands/maingear.png",
    text: "Logo Maingear",
  },
  {
    img: "https://www.venex.com.ar/nvidia_pc_desktop/img/nvidia-logo.png",
    text: "Logo nVidia",
  },
];

const Brands = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[ Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper"
    >
      {brandsArray.map((brand) => {
        return (
          <SwiperSlide className="brand__swiper-slide">
            <img src={brand.img} alt={brand.text} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Brands;
