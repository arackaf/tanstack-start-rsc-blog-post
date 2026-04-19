import { Link } from "@tanstack/react-router";
import type { ComponentProps, FC } from "react";

export type NavigationLinkProps = ComponentProps<typeof Link>;

export const NavigationLink: FC<NavigationLinkProps> = (props) => {
  return <Link {...props} />;
};
