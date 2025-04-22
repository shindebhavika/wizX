// src/components/atoms/Parallax.js
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img
          src={`/photos/cityscape/${id}.jpg`}
          alt={`A London skyscraper #00${id}`}
        />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="parallax-example">
    

      <motion.div
        className="fixed  top-0 left-0 right-0 bottom-0 h-3 bg-[#16cfeb] transform origin-left rounded-full"
        style={{ scaleX }}
      />

      <style jsx global>{`
        html {
          scroll-snap-type: x mandatory;
        }

        .img-container {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .img-container > div {
          width: 300px;
          height: 400px;
          margin: 20px;
          background: #f5f5f5;
          overflow: hidden;
        }

        .img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .img-container h2 {
          color: #8df0cc;
          margin: 0;
          font-family: "Azeret Mono", monospace;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: absolute;
          top: 50%;
          left: calc(50% + 120px);
          transform: translateY(-50%);
        }

        @media (max-width: 500px) {
          .img-container > div {
            width: 150px;
            height: 200px;
          }
          .img-container h2 {
            font-size: 2rem;
            left: calc(50% + 75px);
          }
        }
      `}</style>
    </div>
  );
}
