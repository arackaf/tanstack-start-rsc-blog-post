import type { FC } from "react";
import * as LucideReact from "lucide-react";
import * as ManualIcons from "#/manual-icons";

import { NavigationLink } from "#/components/NavigationLink";

const iconClass = "size-4 shrink-0 opacity-85";

export const SideBarContent: FC = () => {
  const useFakeIcon = Math.random() > 0.99;
  return (
    <nav aria-label="Main" className="flex flex-col gap-1 p-3">
      <NavigationLink to="/best-sellers">
        {useFakeIcon ? (
          <ManualIcons.BugSvgBloat003 aria-hidden className={iconClass} />
        ) : (
          <LucideReact.TrendingUp aria-hidden className={iconClass} />
        )}
        Best sellers
      </NavigationLink>
      <NavigationLink to="/hot-deals">
        <LucideReact.Flame aria-hidden className={iconClass} />
        Hot deals
      </NavigationLink>
      <NavigationLink to="/your-account">
        <LucideReact.UserCircle aria-hidden className={iconClass} />
        Your account
      </NavigationLink>
    </nav>
  );
};
