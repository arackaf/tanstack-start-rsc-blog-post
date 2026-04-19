import type { FC } from "react";
import { Flame, Inbox, TrendingUp, UserCircle } from "lucide-react";

import { NavigationLink } from "#/components/NavigationLink";

const iconClass = "size-4 shrink-0 opacity-85";

export const SideBarContent: FC = () => {
  return (
    <nav aria-label="Main" className="flex flex-col gap-1 p-3">
      <NavigationLink to="/empty">
        <Inbox aria-hidden className={iconClass} />
        Empty
      </NavigationLink>
      <NavigationLink to="/best-sellers">
        <TrendingUp aria-hidden className={iconClass} />
        Best sellers
      </NavigationLink>
      <NavigationLink to="/hot-deals">
        <Flame aria-hidden className={iconClass} />
        Hot deals
      </NavigationLink>
      <NavigationLink to="/your-account">
        <UserCircle aria-hidden className={iconClass} />
        Your account
      </NavigationLink>
    </nav>
  );
};
