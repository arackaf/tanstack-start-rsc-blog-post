import * as LucideReact from "lucide-react";

/** Canonical Lucide icons only (`lucide-react` also duplicates each as `*Icon` / `Lucide*` aliases on the root). */
const LUCIDE_CANONICAL_ICONS = Object.values(LucideReact.icons);

export function randomIcon(offset: number): React.FunctionComponent<{ className: string }> {
  const len = LUCIDE_CANONICAL_ICONS.length;
  const i = (new Date().getMinutes() + offset) % len;
  return LUCIDE_CANONICAL_ICONS[i] as React.FunctionComponent;
}
