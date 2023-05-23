import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
}
