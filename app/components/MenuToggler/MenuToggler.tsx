import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

interface MenuTogglerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MenuToggler({ isOpen, setIsOpen }: MenuTogglerProps) {
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      {isOpen ? (
        <button onClick={closeMenu}>
          <IconX />
        </button>
      ) : (
        <button onClick={openMenu}>
          <IconMenu2 />
        </button>
      )}
    </>
  );
}
