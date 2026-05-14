import type { FC } from "react";

export const FooterContent: FC = () => {
  return (
    <span>
      Copyright {new Date().getFullYear()} typeof window === {typeof window}
    </span>
  );
};
