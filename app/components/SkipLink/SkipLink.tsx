import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href={"#maincontent"}
      className="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(100%+1.3rem)] bg-slate-500 text-center text-zinc-50 transition-transform focus:translate-y-0"
    >
      Skip to the main content
    </Link>
  );
}
