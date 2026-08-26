import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
  isCurrent: boolean;
  variant?: "desktop" | "mobile";
};

export default function NavLink({
  label,
  href,
  isCurrent,
  variant = "desktop",
}: NavLinkProps) {
  if (isCurrent) {
    return (
      <span
        className={
          variant === "desktop"
            ? "text-laranja font-semibold border-b-2 border-laranja pb-0.5"
            : "text-laranja font-semibold"
        }
      >
        {label}
      </span>
    );
  }

  return (
    <Link href={href} className="hover:text-laranja transition-colors">
      {label}
    </Link>
  );
}
