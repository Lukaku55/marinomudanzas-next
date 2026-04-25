import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const NavLink = ({ href, className, children, ...props }: NavLinkProps) => {
  return (
    <Link href={href} className={cn(className)} {...props}>
      {children}
    </Link>
  );
};

NavLink.displayName = "NavLink";

export { NavLink };
