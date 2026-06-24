"use client";
import Lottie from "react-lottie";

type LottieOptions = {
  loop?: boolean;
  autoplay?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  rendererSettings?: Record<string, string>;
};

export default function LottieWrapper({
  options,
  height,
  width,
}: {
  options: LottieOptions;
  height: number;
  width: number;
}) {
  return <Lottie options={options} height={height} width={width} />;
}
