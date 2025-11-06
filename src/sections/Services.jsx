import { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  const text = `BUILDING NEXT-GENERATION WEB APPS WITH MODERN STACKS,
AI INTEGRATION, AND AUTOMATED WORKFLOWS THAT DELIVER.`;

  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        ease: "circ.out",
        duration: 1,
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeader
        title={"Services"}
        textColor={"white"}
        subTitle={"Behind the scene, Beyond the screen"}
        text={text}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => {
        return (
          <div
            key={index}
            className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
            style={
              isDesktop
                ? {
                    top: `calc(10vh + ${index * 5}em)`,
                    marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                  }
                : { top: 0 }
            }
          >
            <div className="flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                  {service.description}
                </p>

                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/88">
                  {service.items.map((item, itemIndex) => {
                    return (
                      <div key={`item-${index}--${itemIndex}`}>
                        <h3 className="flex">
                          <span className="mr-12 text-lg text-white/30">
                            0{itemIndex + 1}
                          </span>
                          {item.title}
                        </h3>

                        {itemIndex < service.items.length - 1 ? (
                          <div className="w-full h-px my-2 bg-white/30" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
