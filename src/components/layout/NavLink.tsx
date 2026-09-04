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
            ? "text-laranja-profundo font-semibold border-b-[3px] border-laranja pb-0.5"
            : "text-laranja-profundo font-semibold"
        }
      >
        {label}
      </span>
    );
  }

  return (
    <Link href={href} className="hover:text-laranja-profundo transition-colors">
      {label}
    </Link>
  );
}
