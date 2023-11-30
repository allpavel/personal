import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
