import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <section className="my-16 featured-background bg-fixed pb-10 pt-6 text-white">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex justify-center items-center py-10">
        <div className="flex justify-center items-center">
          <img className="w-3/4" src={featured} alt="" />
        </div>
        <div>
          <p className="text-xl">March 20, 2023</p>
          <p className="text-xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </section>
  );
}
