import { NavLink } from "../ui/NavLink/NavLink";

export function NavigationMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className={`absolute left-0 right-0 top-9 flex flex-col gap-4 bg-zinc-50 transition-visible duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none sm:visible sm:static sm:flex-row sm:opacity-100 first-letter:${
        isOpen ? "visible opacity-100 " : "invisible opacity-0"
      }`}
    >
      <NavLink href={"/about"}>О себе</NavLink>
      <NavLink href={"/projects"}>Проекты</NavLink>
      <NavLink href={"/articles"}>Статьи</NavLink>
      <NavLink href={"/contacts"}>Контакты</NavLink>
    </nav>
  );
}
