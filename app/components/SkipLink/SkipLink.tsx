import Link from "next/link";

export function SkipLink() {
  return (
    <Link href={"#maincontent"} className="focus: sr-only">
      Skip to the main content
    </Link>
  );
}
