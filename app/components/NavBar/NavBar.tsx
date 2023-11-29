import { NavLink } from "../ui/NavLink/NavLink";

export function NavBar() {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className="absolute left-0 right-0 top-8 flex flex-col bg-zinc-50"
    >
      <NavLink href={"/about"}>О себе</NavLink>
      <NavLink href={"/projects"}>Проекты</NavLink>
      <NavLink href={"/articles"}>Статьи</NavLink>
      <NavLink href={"/contacts"}>Контакты</NavLink>
    </nav>
  );
}
