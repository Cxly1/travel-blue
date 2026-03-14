"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  motionValue,
  useInView,
} from "framer-motion";
import useMeasure from "react-use-measure";

const TRANSITION = {
  type: "spring" as const,
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

function Digit({ value, place }: { value: number; place: number }) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <NumberSlot key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function NumberSlot({ mv, number }: { mv: MotionValue<number>; number: number }) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;
    if (offset > 5) {
      memo -= 10 * bounds.height;
    }
    return memo;
  });

  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

export function SlidingNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => setTargetValue(value), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  const absValue = decimals > 0 ? targetValue : Math.floor(targetValue);
  const [integerPart, decimalPart] = absValue.toString().split(".");
  const integerValue = parseInt(integerPart, 10);
  const integerDigits = integerPart.split("");
  const integerPlaces = integerDigits.map((_, i) =>
    Math.pow(10, integerDigits.length - i - 1)
  );

  // For decimal values, we need to handle them separately
  const displayDecimal = decimals > 0 ? value.toFixed(decimals).split(".")[1] : null;

  return (
    <span ref={containerRef} className="inline-flex items-baseline">
      {prefix && <span>{prefix}</span>}
      <span className="flex items-center">
        {integerDigits.map((_, index) => (
          <Digit
            key={`pos-${integerPlaces[index]}`}
            value={integerValue}
            place={integerPlaces[index]}
          />
        ))}
        {displayDecimal && (
          <>
            <span>.</span>
            {displayDecimal.split("").map((_, index) => (
              <Digit
                key={`decimal-${index}`}
                value={parseInt(displayDecimal, 10)}
                place={Math.pow(10, displayDecimal.length - index - 1)}
              />
            ))}
          </>
        )}
      </span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
