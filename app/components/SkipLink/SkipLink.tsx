import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href={"#maincontent"}
      className="sr-only focus:not-sr-only active:not-sr-only"
    >
      Skip to the main content
    </Link>
  );
}
