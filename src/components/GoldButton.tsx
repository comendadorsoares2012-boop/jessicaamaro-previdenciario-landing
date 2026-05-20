import { forwardRef, ReactNode } from "react";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "px-6 py-3 text-[11px]",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-4 text-sm",
};

/**
 * Premium 3D gold CTA button.
 * - Gradient top→bottom (light to dark gold)
 * - Top highlight border + bottom drop-shadow ridge
 * - Hover lifts slightly; active depresses
 */
const GoldButton = forwardRef<HTMLAnchorElement, GoldButtonProps>(
  ({ href, onClick, children, target, rel, className = "", size = "md" }, ref) => {
    const inner = (
      <span
        className={`relative inline-flex items-center justify-center ${sizeMap[size]} font-body font-semibold uppercase tracking-[0.2em] text-brand-green
          bg-gradient-to-b from-[hsl(38,68%,67%)] via-brand-gold to-[hsl(32,45%,48%)]
          border-t border-[hsl(40,80%,86%)] border-b border-[hsl(32,55%,32%)]
          shadow-[0_4px_0_0_hsl(32,55%,32%),0_8px_18px_-6px_hsl(32,55%,32%/0.55)]
          hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_hsl(32,55%,32%),0_12px_22px_-6px_hsl(32,55%,32%/0.6)]
          active:translate-y-1 active:shadow-none
          transition-all duration-200 cursor-pointer select-none rounded-sm`}
      >
        {children}
      </span>
    );

    if (href) {
      return (
        <a ref={ref} href={href} target={target} rel={rel} onClick={onClick} className={`inline-block ${className}`}>
          {inner}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={`inline-block bg-transparent border-0 p-0 ${className}`}>
        {inner}
      </button>
    );
  }
);

GoldButton.displayName = "GoldButton";

export default GoldButton;
