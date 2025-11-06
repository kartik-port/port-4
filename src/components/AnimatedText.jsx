import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const AnimatedText = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }

    
  });
  return (
    <div ref={containerRef}>
      {lines.map((line, index) => {
        return (
          <span
            ref={(el) => {
              lineRefs.current[index] = el;
            }}
            className={
              className + " block text-pretty leading-relaxed tracking-wide"
            }
            key={index}
          >
            {line}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedText;
