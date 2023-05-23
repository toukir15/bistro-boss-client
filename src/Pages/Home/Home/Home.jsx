import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Fetured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
    </div>
  );
}
