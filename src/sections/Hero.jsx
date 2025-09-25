import { useState } from "react";

import { product, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { digital1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [digital, setDigital] = useState(digital1);

  return (
   <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container max-lg:mt-[17%]">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 ">
        <p className="text-xl font-montserrat text-coral-red">Digital Products</p>

        <h1 className=" font-palanquin text-8xl max-sm:text-[48px] max-sm:leading-[58px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            LOSCO Company LLC
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Boost Your Productivity
          </span>
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          We provide high-quality digital products, templates, tools, and online
          resources designed to help individuals and businesses achieve their
          goals.
        </p>

        <Button label="Explore Products" iconURL={arrowRight} />

        {/* الإحصائيات */}
        <div className="flex justify-start xs:justify-center md:justify-center items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* الصورة الكبيرة */}
      <div className="relative flex-1 flex justify-center items-center w-full xl:min-h-screen max-xl:py-20">
        <img
          src={digital}
          alt="digital product"
          className="hidden lg:block w-[470px] h-auto"
        />

        {/* الصور الصغيرة - تظهر فقط من lg وفوق */}
        <div className="hidden lg:flex gap-4 absolute -bottom-[150px]">
          {product.map((image, index) => (
            <ShoeCard
              key={index}
              index={index}
              imgURL={image}
              changeBigShoeImage={(d) => setDigital(d)}
              bigShoeImg={digital}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
