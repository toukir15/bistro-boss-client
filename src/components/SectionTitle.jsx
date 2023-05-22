export default function SectionTitle({ heading, subHeading }) {
  return (
    <div className="text-center my-8 w-4/12 mx-auto">
      <p className="mb-4 text-[#D99904]">{subHeading}</p>
      <h1 className="text-4xl border-y-4 py-2">{heading}</h1>
    </div>
  );
}
