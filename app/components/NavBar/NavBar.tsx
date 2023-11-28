import Link from "next/link";

export function NavBar() {
  return (
    <nav role="navigation" aria-label="Main menu">
      <Link href={"/about"}>О себе</Link>
      <Link href={"/projects"}>Проекты</Link>
      <Link href={"/articles"}>Статьи</Link>
    </nav>
  );
}
