import Marquee from "../components/Marquee";
import AnimatedHeader from "../components/AnimatedHeader";
import { socials } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Contact = () => {
  const items = [
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
  ];
  const text = `Got a question, or a project Idea?
    I'D love to hear from you and discuss further.`;

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between items-center min-h-screen bg-black"
    >
      <div>
        <AnimatedHeader
          subTitle={"You Dream It, I Code it"}
          title={"Contact Me"}
          textColor={"white"}
          text={text}
        />

        <div className="flex px-10 font-light text-white uppercase lg:text-[2rem] text-[1.625rem] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider md:text-2xl lg:text-3xl lowercase">
                sakshamverma1000@gmail.com
              </p>
            </div>

            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                8178818207
              </p>
            </div>

            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />

              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => {
                  return (
                    <a
                      target="_blank"
                      key={index}
                      href={social.href}
                      className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {"{"}
                      {social.name}
                      {"}"}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
