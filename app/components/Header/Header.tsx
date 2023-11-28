"use client";

import { useState } from "react";
import { MenuToggler } from "../MenuToggler/MenuToggler";
import { NavBar } from "../NavBar/NavBar";
import { Logo } from "../Logo/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Logo />
      <MenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavBar />
    </header>
  );
}
