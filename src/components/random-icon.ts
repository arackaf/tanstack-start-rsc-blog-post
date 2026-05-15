import type { ComponentType } from "react";
import * as LucideReact from "lucide-react";

type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const LUCIDE_ICONS_SORTED: IconComponent[] = Object.keys(LucideReact.icons)
  .sort()
  .map((key) => (LucideReact.icons as Record<string, IconComponent>)[key]);

export function randomIcon(offset: number): IconComponent {
  const len = LUCIDE_ICONS_SORTED.length;
  const epochMinute = Math.floor(Date.now() / 60_000);
  const i = (epochMinute + offset) % len;

  return LUCIDE_ICONS_SORTED[i];
}
