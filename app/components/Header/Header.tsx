"use client";

import { useState } from "react";
import { MenuToggler } from "../MenuToggler/MenuToggler";
import { NavBar } from "../NavBar/NavBar";
import { Logo } from "../Logo/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between">
      <Logo />
      <MenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <NavBar /> : null}
    </header>
  );
}
