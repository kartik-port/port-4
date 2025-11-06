import { ArrowUpRight } from "lucide-react";
import AnimatedHeader from "../components/AnimatedHeader";
import { projects } from "../constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work = () => {
  const overlayRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(null);
  const previewRef = useRef(null);
  const moveX = useRef(null);
  const moveY = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });

    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.x = e.clientX + 24;
    mouse.y = e.clientY + 24;
    moveX.current(mouse.x);
    moveY.current(mouse.y);
  };

  const text = `Featured projects that have been meticulously crafted
     with passion to learn and improve my skill as a developer.`;

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);

    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        duration: 0.11,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeaveProjectDiv = () => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const hideOverlay = (index) => {
    if (window.innerWidth < 768) return;
    const el = overlayRefs.current[index];

    if (!el) return;

    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.3,
      scale: 0.95,
      ease: "power2.in",
    });
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeader
        subTitle={"Logic meets Aesthetics, Seamelessly"}
        title={"Work"}
        textColor={"black"}
        text={text}
      />

      <div
        className="relative flex flex-col font-light"
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseLeave={handleMouseLeaveProjectDiv}
      >
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div
                key={project.id}
                id="project"
                className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
                onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={() => handleMouseLeave(index)}
                onMouseLeave={() => hideOverlay(index)}
              >
                <div
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
                />
                {/*Title*/}
                <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                  <h2 className="lg:text-[2rem] text-[1.625rem] leading-none">
                    {project.name}
                  </h2>
                  <ArrowUpRight className="md:size-6 size-5" />
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-0.5 bg-black/80 " />

              {/* Frameworks */}

              <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                {project.frameworks.map((framework, index) => {
                  return (
                    <div key={index}>
                      <p
                        key={framework.id}
                        className="text-black transition-colors duration-500 md:group-hover:text-white"
                      >
                        {framework.name}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Preview image */}

              <div className="relative flex justify-center items-center px-10 md:hidden h-[25rem]">
                <img
                  src={project.bgImage}
                  alt={`${project.name}-bg-image`}
                  className="object-cover brightness-50 w-full h-full rounded-md"
                />

                <img
                  className="absolute bg-center px-14 rounded-xl"
                  src={project.image}
                  alt={`${project.name}-bg-image`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop floating image div */}

      <div
        className="fixed -top-2/6 left-0 z-50 overflow-hidden pointer-events-none w-[60rem] md:block hidden opacity-0"
        ref={previewRef}
      >
        {currentIndex !== null && (
          <img
            src={projects[currentIndex].image}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </section>
  );
};

export default Work;
