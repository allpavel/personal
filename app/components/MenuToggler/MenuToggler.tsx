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
        <button onClick={closeMenu} aria-expanded={isOpen}>
          <IconX aria-hidden="true" focusable="false" />
        </button>
      ) : (
        <button onClick={openMenu} aria-expanded={isOpen}>
          <IconMenu2 aria-hidden="true" focusable="false" />
        </button>
      )}
    </>
  );
}
