// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import img
import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";
import HeadingTitle from "../../../components/SectionTitle";
import SectionTitle from "../../../components/SectionTitle";

export default function Category() {
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        allowSlideNext={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative " src={category1} alt="" />
          <h3 className="uppercase text-2xl text-center text-white absolute bottom-5 left-[50%] -translate-x-[50%]">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative " src={category2} alt="" />
          <h3 className="uppercase text-2xl text-center text-white absolute bottom-5 left-[50%] -translate-x-[50%]">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative " src={category3} alt="" />
          <h3 className="uppercase text-2xl text-center text-white absolute bottom-5 left-[50%] -translate-x-[50%]">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative " src={category4} alt="" />
          <h3 className="uppercase text-2xl text-center text-white absolute bottom-5 left-[50%] -translate-x-[50%]">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative " src={category5} alt="" />
          <h3 className="uppercase text-2xl text-center text-white absolute bottom-5 left-[50%] -translate-x-[50%]">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
