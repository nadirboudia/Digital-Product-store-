import { digital4 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between  max-lg:flex-col gap-10 w-full max-container mt-12 "
    >
      {/* النص */}
      <div className="flex flex-col lg:w-1/2 w-full  lg:p-16">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          About{" "}
          <span className="text-coral-red">
            LOSCO <span className="text-black">Company</span> LLC
          </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          LOSCO Company LLC is a digital solutions company that provides a wide
          range of high-quality digital products designed to help individuals
          and businesses improve productivity and achieve their goals.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our offerings include educational resources, ready-to-use templates,
          digital tools, and other online content tailored to meet the needs of
          a modern market. We focus on delivering accessible, innovative, and
          user-friendly digital products that customers can easily purchase and
          use online.
        </p>
        <div className="mt-11">
          <Button label="Learn More" />
        </div>
      </div>

      {/* الصورة */}
      <div className="flex justify-center items-center lg:w-1/2 w-full lg:pr-20">
        <img
          src={digital4}
          alt="About LOSCO"
          width={510}
          height={522}
          className="object-contain rounded-[13px]"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
