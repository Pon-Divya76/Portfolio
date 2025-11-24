"use client";

import { useEffect, useRef } from "react";

export default function RainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const numDrops = 150;
    const drops = [];

    class Drop {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.length = 15 + Math.random() * 20;
        this.speed = 4 + Math.random() * 4;
        this.opacity = 0.1 + Math.random() * 0.3;
      }

      fall() {
        this.y += this.speed;
        if (this.y > h) {
          this.y = -20;
          this.x = Math.random() * w;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    for (let i = 0; i < numDrops; i += 1) {
      drops.push(new Drop());
    }

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      drops.forEach((drop) => {
        drop.fall();
        drop.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed -z-10 h-full w-full"
      style={{ inset: 0, pointerEvents: "none" }}
    />
  );
}



