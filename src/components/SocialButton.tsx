import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant: "instagram" | "youtube" | "facebook" | "linkedin" | "twitter";
}

const variantStyles = {
  instagram: "bg-gradient-to-r from-instagram-start to-instagram-end text-white",
  youtube: "bg-youtube text-white",
  facebook: "bg-facebook text-white", 
  linkedin: "bg-linkedin text-white",
  twitter: "bg-twitter text-white",
};

export const SocialButton = ({ href, children, className, variant }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-full max-w-md px-5 py-3 rounded-lg font-semibold text-base",
        "flex items-center justify-center gap-3",
        "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]",
        "transition-[var(--transition-smooth)]",
        "hover:scale-[1.02] active:scale-[0.98]",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </a>
  );
};