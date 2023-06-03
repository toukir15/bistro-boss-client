import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

export default function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

  return (
    <div className="w-full">
      <SectionTitle
        heading={"payment"}
        subHeading={"please provide"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
