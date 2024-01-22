"use client"
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CampSiteProps {
  backgroundImg: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImg,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImg} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="folded map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, i) => (
              <Image
                key={i}
                src={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: WheelEvent) => {
    if (!scrollContainerRef.current) {
      return;
    }
    e.preventDefault();
    scrollContainerRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", onWheel);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", onWheel);
      }
    };
  }, []);

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div ref={scrollContainerRef} className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImg="bg-bg-img-1"
          title="Acampamento Putuk Truno"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Participaram"
        />
        <CampSite
          backgroundImg="bg-bg-img-2"
          title="Acampamento da Montanha"
          subtitle="Em algum lugar na natureza"
          peopleJoined="50+ Participaram"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white"><strong>Sente-se perdido</strong> e não sabe o caminho?</h2>
          <p className="regular-14 md:regular-16 mt-5 text-white">Por causa da ansiedade dos escaladores ao visitar um novo local de escalada, a possibilidade de se perderem é muito grande. É por isso que estamos aqui para aqueles que querem começar uma aventura</p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
