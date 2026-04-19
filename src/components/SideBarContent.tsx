import type { FC } from "react";

import { NavigationLink } from "#/components/NavigationLink";

export const SideBarContent: FC = () => {
  return (
    <nav aria-label="Main" className="flex flex-col gap-1 p-3">
      <NavigationLink to="/empty">Empty</NavigationLink>
      <NavigationLink to="/best-sellers">Best sellers</NavigationLink>
      <NavigationLink to="/hot-deals">Hot deals</NavigationLink>
      <NavigationLink to="/your-account">Your account</NavigationLink>
    </nav>
  );
};
