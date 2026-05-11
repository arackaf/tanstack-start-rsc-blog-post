import * as LucideReact from "lucide-react";

/** Canonical Lucide icons only (`lucide-react` also duplicates each as `*Icon` / `Lucide*` aliases on the root). */
const LUCIDE_CANONICAL_ICONS = Object.values(LucideReact.icons);

export function randomIcon(): React.FunctionComponent<{ className: string }> {
  const i = Math.floor(Math.random() * LUCIDE_CANONICAL_ICONS.length);
  return LUCIDE_CANONICAL_ICONS[i] as React.FunctionComponent;
}
