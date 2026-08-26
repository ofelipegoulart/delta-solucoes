import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary: "bg-laranja border-transparent text-white hover:bg-laranja-dark",
    secondary:
      "bg-transparent border-laranja text-laranja hover:bg-laranja hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`flex items-center justify-center text-center text-xs sm:text-sm font-medium rounded px-3 sm:px-5 py-3 border-2 transition-colors ${variants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}
