import type { FC } from "react";

import { NavigationLink } from "#/components/NavigationLink";
import { randomIcon } from "./random-icon";

const iconClass = "size-4 shrink-0 opacity-85";

export const SideBarContent: FC = () => {
  const Icon1 = randomIcon(0);
  const Icon2 = randomIcon(1);
  const Icon3 = randomIcon(2);

  return (
    <nav aria-label="Main" className="flex flex-col gap-1 p-3">
      <NavigationLink to="/best-sellers">
        <Icon1 aria-hidden className={iconClass} />
        Best sellers
      </NavigationLink>
      <NavigationLink to="/hot-deals">
        <Icon2 aria-hidden className={iconClass} />
        Hot deals
      </NavigationLink>
      <NavigationLink to="/your-account">
        <Icon3 aria-hidden className={iconClass} />
        Your account
      </NavigationLink>
    </nav>
  );
};
