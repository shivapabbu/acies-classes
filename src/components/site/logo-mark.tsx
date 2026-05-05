import * as React from "react";

type Props = {
  className?: string;
  title?: string;
};

export function LogoMark({ className, title = "ACIES Classes" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aciesBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A3D91" />
          <stop offset="0.7" stopColor="#0B57C8" />
          <stop offset="1" stopColor="#0A3D91" />
        </linearGradient>
        <clipPath id="r">
          <rect x="3" y="3" width="90" height="90" rx="18" />
        </clipPath>
      </defs>

      <rect x="3" y="3" width="90" height="90" rx="18" fill="url(#aciesBlue)" />

      {/* subtle diagonal texture */}
      <g clipPath="url(#r)" opacity="0.18">
        <path
          d="M-10 78 L44 24 L62 24 L8 78 Z"
          fill="#ffffff"
        />
        <path
          d="M6 92 L60 38 L78 38 L24 92 Z"
          fill="#ffffff"
        />
      </g>

      {/* ACIES text */}
      <text
        x="48"
        y="30"
        textAnchor="middle"
        fontSize="22"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        fontWeight="800"
        letterSpacing="1"
        fill="#ffffff"
      >
        ACIES
      </text>

      {/* stylized paper/arrow mark */}
      <g fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round">
        <path d="M24 70 L44 50 L44 70 Z" />
        <path d="M34 76 L54 56 L54 76 Z" opacity="0.92" />
        <path d="M44 82 L70 56 L70 82 Z" opacity="0.86" />
      </g>
    </svg>
  );
}

