import { Logo } from "../Logo/Logo";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center sm:flex-row sm:justify-between">
      <Logo />
      <div className="py-2 text-center sm:py-0">
        All rights reserved &copy; Pavel Alloyarov 2023
      </div>
      <div className="flex gap-4">
        <IconBrandGithub className="transition-svg hover:scale-125 hover:cursor-pointer hover:stroke-zinc-500" />
        <IconBrandLinkedin className="transition-svg hover:scale-125 hover:cursor-pointer hover:stroke-zinc-500" />
        <IconBrandMastodon className="transition-svg hover:scale-125 hover:cursor-pointer hover:stroke-zinc-500" />
      </div>
    </footer>
  );
}
