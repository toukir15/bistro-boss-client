import SectionTitle from "../../../components/SectionTitle";
import { RiDoubleQuotesR } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-10 py-10 text-center">
                <div className="flex justify-center flex-col items-center  mb-4">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <div>
                    <RiDoubleQuotesR className="text-4xl mt-4" />
                  </div>
                </div>
                <p>{review.details}</p>
                <p className="text-orange-400 text-2xl font-medium">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
