import type { FC, PropsWithChildren } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "#/components/ui/sheet";
import { cn } from "#/lib/utils";

export type ImageSidePanelTriggerProps = PropsWithChildren<{
  name: string;
  avatar: string;
}>;

export const SidePanelTrigger: FC<ImageSidePanelTriggerProps> = (props) => {
  const { name, avatar } = props;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className={cn(
            "group inline-flex cursor-pointer overflow-hidden rounded-full bg-muted p-0 shadow-sm transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          <img src={avatar} alt="User avatar" className={cn("w-6 h-6 rounded-full object-cover")} />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Login info</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-4">
          <span>User: {name}</span>
        </div>
      </SheetContent>
    </Sheet>
  );
};
