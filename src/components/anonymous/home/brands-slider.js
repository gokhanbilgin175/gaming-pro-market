import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import brandImage1 from "../../../assets/img/brands/business-insider.png";
import brandImage2 from "../../../assets/img/brands/cnet.png";
import brandImage3 from "../../../assets/img/brands/eurogamer.png";
import brandImage4 from "../../../assets/img/brands/gamespot.png";
import brandImage5 from "../../../assets/img/brands/ign.png";
import brandImage6 from "../../../assets/img/brands//kotaku.png";
import brandImage7 from "../../../assets/img/brands/the-verge.png";
import "./brands-slider.scss";

const BrandsSlider = () => {
  return (
    <Container fluid className="brands-slider-container">
      <Swiper
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },

          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="slider"
      >
        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage1} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage7} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage3} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage4} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage5} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage6} alt="brand-logo" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slider-image">
          <Link to="/shop" rel="noreferrer">
            <img src={brandImage2} alt="brand-logo" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default BrandsSlider;
