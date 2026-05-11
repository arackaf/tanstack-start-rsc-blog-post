import * as ManualIcons from "#/manual-icons";
import * as LucideReact from "lucide-react";

/** Canonical Lucide icons only (`lucide-react` also duplicates each as `*Icon` / `Lucide*` aliases on the root). */
const LUCIDE_CANONICAL_ICONS = Object.values(LucideReact.icons);

const BUG_BLOAT_ICON_COUNT = 100;

export function randomManualIcon(): React.FunctionComponent<{ className: string }> {
  const n = Math.floor(Math.random() * BUG_BLOAT_ICON_COUNT) + 1;
  const key = `BugSvgBloat${String(n).padStart(3, "0")}` as keyof typeof ManualIcons;
  return ManualIcons[key] as typeof ManualIcons.BugSvgBloat001;
}

export function randomLucideIcon(): React.FunctionComponent<{ className: string }> {
  const i = Math.floor(Math.random() * LUCIDE_CANONICAL_ICONS.length);
  return LUCIDE_CANONICAL_ICONS[i] as React.FunctionComponent;
}

export function randomIcon(): React.FunctionComponent<{ className: string }> {
  return Math.random() > 0.5 ? randomManualIcon() : randomLucideIcon();
}
