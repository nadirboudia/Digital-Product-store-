import { arrowRight } from "../assets/icons";
import { offer1 } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex w-full justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="bg-red-300 w-[50%]  ">
        <img
          src={offer1}
          alt="Special Offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex  flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Get instant access to our digital products right after checkout. Fast,
          secure, and hassle-free—no waiting required.
        </p>
        <p className="mt-6 info-text">
          With Stripe-powered payments and exclusive online deals, your purchase
          is protected and delivered in seconds. Experience digital shopping the
          professional way.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            onClick={() => {
              const element = document.getElementById("products");
            element.scrollIntoView({ behavior: "smooth" });
            }}
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
