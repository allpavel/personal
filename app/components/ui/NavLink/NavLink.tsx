import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface NavLinkProps {
  title: string;
  className?: string;
  props?: ComponentPropsWithoutRef<"a">;
}

export function NavLink({
  as,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  title,
  props,
  className,
}: LinkProps & NavLinkProps): ReactNode {
  return (
    <Link
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      className={className}
      {...props}
    >
      {title}
    </Link>
  );
}
