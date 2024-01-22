"use client";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className={`max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="hero-map" />

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 transition-all duration-500 ease-in-out">
        <Image
          src={"/camp.svg"}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] transition-transform duration-300 hover:scale-110"
        />
        <h1 className="bold-52 lg:bold-88 transition-all duration-700 delay-300">Acampamento em Putuk Truno</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] transition-all duration-700 delay-500">
          Queremos estar em cada uma de suas viagens buscando a satisfação de
          ver a beleza incorruptível da natureza. Podemos ajudá-lo em uma
          aventura ao redor do mundo em apenas um app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src={"/star.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Avaliações Excelentes
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Baixar App" variant="btn_green" />
          <Button
            type="button"
            title="Como trabalhamos"
            icon="/play.svg"
            variant="btn_white"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Localidade</p>
              <Image src={"close.svg"} alt="close div" width={24} height={24} />
            </div>
            <p className="bold-2 text-white">Águas Calientes</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distância</p>
              <p className="bold-2 text-white">27,887km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevação</p>
              <p className="bold-2 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
