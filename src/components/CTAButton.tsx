import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTAButton({ href, children, variant = "dark" }: { href: string; children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition",
        variant === "dark" && "bg-white text-black hover:bg-white/85",
        variant === "light" && "border border-white/10 bg-white/[0.06] text-white hover:border-white/25 hover:bg-white/[0.1]"
      )}
    >
      {children}
    </Link>
  );
}
