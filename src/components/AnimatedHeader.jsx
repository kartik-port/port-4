/*import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const AnimatedHeader = ({
  title,
  text,
  subTitle,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? contextRef.current : undefined,
    });

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
        <div
          className="flex flex-col pt-16 justify-center gap-12 sm:gap-16"
          ref={headerRef}
        >
          <p
            className={`text-sm font-light uppercase tracking-[0.5rem] px-10 text-${textColor}`}
          >
            {subTitle}
          </p>

          <div className="px-10">
            <h1
              className={`flex flex-row flex-wrap gap-12 text-${textColor} uppercase banner-text-responsive sm:gap-16 lg:whitespace-nowrap md:block`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 text-${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedText
            className={"font-light uppercase value-text-responsive"}
            text={text}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
*/

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";

const AnimatedHeader = ({
  title,
  text,
  subTitle,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? contextRef.current : undefined,
    });

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
        <div
          className="flex flex-col pt-16 justify-center gap-12 sm:gap-16"
          ref={headerRef}
        >
          <p
            className={`text-sm font-light uppercase tracking-[0.5rem] px-10 text-${textColor}`}
          >
            {subTitle}
          </p>

          <div className="px-10">
            <h1
              className={`text-${textColor} uppercase banner-text-responsive text-center sm:text-left lg:whitespace-nowrap`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 text-${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedText
            className={"font-light uppercase value-text-responsive"}
            text={text}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
