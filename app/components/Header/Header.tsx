import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SkipLink } from "../SkipLink/SkipLink";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between">
      <SkipLink />
      <Logo />
      <Navigation />
    </header>
  );
}
