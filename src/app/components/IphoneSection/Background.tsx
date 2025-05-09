"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const BALL_RADIUS = 50;
const BALL_DIAMETER = BALL_RADIUS * 2;

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - BALL_DIAMETER),
  y: Math.random() * (window.innerHeight - BALL_DIAMETER),
});

const getRandomVelocity = () => ({
  vx: (Math.random() - 0.5) * 3,
  vy: (Math.random() - 0.5) * 3,
});

const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

const Background = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [balls, setBalls] = useState(
    Array.from({ length: 6 }, () => ({
      position: getRandomPosition(),
      velocity: getRandomVelocity(),
      color: getRandomColor(),
    }))
  );

  useEffect(() => {
    if (isMobile !== undefined) {
      const updatePositions = () => {
        setBalls((prevBalls) =>
          prevBalls.map((ball) => {
            let { x, y } = ball.position;
            let { vx, vy } = ball.velocity;

            if (x + BALL_DIAMETER >= window.innerWidth || x <= 0) {
              vx *= -1;
              x = Math.max(0, Math.min(x, window.innerWidth - BALL_DIAMETER));
            }
            if (
              y + BALL_DIAMETER >= (isMobile ? 1300 : window.innerHeight) ||
              y <= (isMobile ? 800 : 0)
            ) {
              vy *= -1;
              y = Math.max(
                isMobile ? 800 : 0,
                Math.min(
                  y,
                  (isMobile ? 1300 : window.innerHeight) - BALL_DIAMETER
                )
              );
            }

            return {
              ...ball,
              position: { x: x + vx, y: y + vy },
              velocity: { vx, vy },
            };
          })
        );
        requestAnimationFrame(updatePositions);
      };
      requestAnimationFrame(updatePositions);
    }
  }, [isMobile]);

  return (
    <div className="relative">
      {balls.map((ball, index) => (
        <motion.div
          key={index}
          className="w-12 h-12 md:w-24 md:h-24 absolute rounded-full backdrop-blur-xl"
          style={{ backgroundColor: ball.color, filter: "blur(40px)" }}
          animate={{ x: ball.position.x, y: ball.position.y }}
          transition={{ type: "tween", ease: "linear", duration: 0.05 }}
        />
      ))}
    </div>
  );
};

export default Background;
