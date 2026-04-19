import { Link } from "@tanstack/react-router";
import type { ComponentProps, FC } from "react";

export type NavigationLinkProps = ComponentProps<typeof Link>;

function mergeClassNames(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

const baseClassName =
  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-stone-800 no-underline transition-colors hover:bg-stone-900/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2";

const activeClassName = "bg-stone-900/12 font-semibold text-stone-950";

export const NavigationLink: FC<NavigationLinkProps> = (props) => {
  const { className, activeProps, ...rest } = props;

  const resolvedActiveProps =
    typeof activeProps === "function"
      ? () => {
          const p = activeProps();
          return {
            ...p,
            className: mergeClassNames(activeClassName, p.className),
          };
        }
      : {
          ...activeProps,
          className: mergeClassNames(activeClassName, activeProps?.className),
        };

  return <Link {...rest} className={mergeClassNames(baseClassName, className)} activeProps={resolvedActiveProps} />;
};
