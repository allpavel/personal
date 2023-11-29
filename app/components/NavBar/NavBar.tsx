import Link from "next/link";

export function NavBar() {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className="absolute left-0 right-0 top-8 flex flex-col bg-zinc-50"
    >
      <Link href={"/about"}>О себе</Link>
      <Link href={"/projects"}>Проекты</Link>
      <Link href={"/articles"}>Статьи</Link>
    </nav>
  );
}
