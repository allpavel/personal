import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <Link href={"/about"}>О себе</Link>
      <Link href={"/projects"}>Проекты</Link>
      <Link href={"/articles"}>Статьи</Link>
    </nav>
  );
}
