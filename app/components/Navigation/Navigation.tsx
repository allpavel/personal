"use client";

import { useState } from "react";
import { MenuToggler } from "../MenuToggler/MenuToggler";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationMenu isOpen={isOpen} />
    </>
  );
}
