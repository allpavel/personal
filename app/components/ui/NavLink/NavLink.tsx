import Link, { LinkProps } from "next/link";
import { HTMLProps, ReactNode } from "react";

export function NavLink({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...rest
}: LinkProps & HTMLProps<HTMLAnchorElement>): ReactNode {
  return (
    <Link
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      legacyBehavior
    >
      <a {...rest}>{children}</a>
    </Link>
  );
}
