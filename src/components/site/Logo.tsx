import type { HTMLAttributes } from "react";

type LogoVariant = "onLight" | "onDark";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  variant?: LogoVariant;
  /** Width in px – height scales proportionally (viewBox er 1321x235, ratio ≈ 5.6:1) */
  width?: number;
}

export function Logo({ variant = "onLight", width = 160, className, ...props }: LogoProps) {
  const src =
    variant === "onDark" ? "/logos/QP_Logo_OnDark.svg" : "/logos/QP_Logo_OnLight.svg";
  const height = Math.round(width / 5.62);
  return (
    <img
      src={src}
      alt="QuestPulse"
      width={width}
      height={height}
      className={className}
      draggable={false}
      {...props}
    />
  );
}
