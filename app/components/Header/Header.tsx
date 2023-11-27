import Link from "next/link";

export default function Header() {
  return (
    <header>
      <a href="/" className="font-font-ephesis">
        Pavel Alloyarov
      </a>
      <nav>
        <Link href={"/about"}>О себе</Link>
        <Link href={"/projects"}>Проекты</Link>
        <Link href={"/articles"}>Статьи</Link>
      </nav>
    </header>
  );
}
