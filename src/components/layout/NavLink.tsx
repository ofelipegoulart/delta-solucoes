import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
  isCurrent: boolean;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
};

export default function NavLink({
  label,
  href,
  isCurrent,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  if (isCurrent) {
    return (
      <span
        className={
          variant === "desktop"
            ? "text-laranja-profundo font-semibold border-b-[3px] border-laranja pb-0.5"
            : "text-branco font-semibold underline underline-offset-4"
        }
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        variant === "desktop"
          ? "hover:text-laranja-profundo transition-colors"
          : "text-branco hover:text-marinho transition-colors"
      }
    >
      {label}
    </Link>
  );
}
