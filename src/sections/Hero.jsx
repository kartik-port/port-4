import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { MathUtils } from "three";
import { useMediaQuery } from "react-responsive";
import AnimatedHeader from "../components/AnimatedHeader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const aboutText = `
      Full-stack developer with
         a passion for backend technologies,
         system design, and
         real time communication.
         `;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeader
        title={"Kartik Mhatre"}
        text={aboutText}
        textColor={"black"}
        subTitle={"404 No Bugs Found"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />

          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.6 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                position={[0, 5, -9]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[0, 3, 1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[-5, -1, -1]}
                intensity={2}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                position={[10, 1, 0]}
                intensity={2}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
