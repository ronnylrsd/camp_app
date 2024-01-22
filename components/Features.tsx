"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start animate-fadeSlideUp">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="feature icon" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="features"
      className={`flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px] animate-slideInLeft">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative animate-fadeIn">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Nossos Recursos</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
