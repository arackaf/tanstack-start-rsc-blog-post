import type { FC } from "react";

export const FooterContent: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <span>Copyright {new Date().getFullYear()}</span>
      <button
        type="button"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click to learn more
      </button>
    </div>
  );
};
