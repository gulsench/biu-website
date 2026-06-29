import { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type HoverEffect = "none" | "slowDown" | "speedUp" | "pause" | "goBonkers";

export interface CircularSpinTextProps {
  text?: string;
  spinDuration?: number;
  onHover?: HoverEffect;
  size?: number;
  fontSize?: number;
  fontWeight?: number;
  textColor?: string;
  radius?: number;
  letterSpacing?: number;
  direction?: "clockwise" | "counterclockwise";
  showCircleBorder?: boolean;
  className?: string;
}

function getRotationTransition(
  duration: number,
  from: number,
  direction: "clockwise" | "counterclockwise",
  loop = true,
) {
  return {
    from,
    to: direction === "clockwise" ? from + 360 : from - 360,
    ease: "linear" as const,
    duration,
    type: "tween" as const,
    repeat: loop ? Infinity : 0,
  };
}

function getTransition(
  duration: number,
  from: number,
  direction: "clockwise" | "counterclockwise",
) {
  return {
    rotate: getRotationTransition(duration, from, direction),
    scale: { type: "spring" as const, damping: 20, stiffness: 300 },
  };
}

/** Circular text ring with continuous rotation (ported from Framer module). */
export function CircularSpinText({
  text = "CIRCULAR TEXT • SPIN •",
  spinDuration = 20,
  onHover = "speedUp",
  size = 200,
  fontSize = 24,
  fontWeight = 900,
  textColor = "currentColor",
  radius = 80,
  letterSpacing = 0,
  direction = "clockwise",
  showCircleBorder = false,
  className,
}: CircularSpinTextProps) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  }, [spinDuration, text, onHover, controls, direction, reduceMotion, rotation]);

  const handleHoverStart = () => {
    if (reduceMotion || onHover === "none") return;
    const start = rotation.get();

    if (onHover === "pause") {
      controls.start({
        rotate: start,
        scale: 1.05,
        transition: {
          rotate: { type: "spring", damping: 25, stiffness: 400 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        },
      });
      return;
    }

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start, direction);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start, direction);
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start, direction);
        scaleVal = 0.85;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start, direction);
    }

    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    if (reduceMotion || onHover === "none") return;
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  };

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        style={{
          margin: "0 auto",
          borderRadius: "50%",
          width: size,
          position: "relative",
          height: size,
          fontWeight,
          color: textColor,
          textAlign: "center",
          cursor: onHover !== "none" ? "pointer" : "default",
          transformOrigin: "50% 50%",
          rotate: rotation,
          backgroundColor: showCircleBorder
            ? "rgba(255, 255, 255, 0.03)"
            : "transparent",
          border: showCircleBorder
            ? "1px solid rgba(255, 255, 255, 0.05)"
            : "none",
        }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        aria-hidden
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const angle = (rotationDeg * Math.PI) / 180;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;
          const transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;

          return (
            <span
              key={`${letter}-${i}`}
              style={{
                position: "absolute",
                display: "inline-block",
                left: "50%",
                top: "50%",
                fontSize,
                letterSpacing,
                transform,
                userSelect: "none",
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default CircularSpinText;
