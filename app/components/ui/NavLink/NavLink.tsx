import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface NavLinkProps {
  className?: string;
  children?: ReactNode;
  props?: ComponentPropsWithoutRef<"a">;
}

export function NavLink({
  as,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  props,
  className,
  children,
}: LinkProps & NavLinkProps): ReactNode {
  return (
    <Link
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      className={`text-center${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
