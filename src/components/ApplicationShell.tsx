import type { FC, PropsWithChildren } from "react";
import { SideBarContent } from "./SideBarContent";

export const ApplicationShell: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <main>
      <header className="fixed top-0 left-0 right-0 h-12 z-10 bg-blue-200">Header</header>
      <section className="fixed left-0 top-12 bottom-0 w-60 overflow-auto ">
        <SideBarContent />
      </section>
      <section className="max-w-[600px] mt-12 pt-4 mx-auto">
        <div className="flex flex-col gap-2">
          <section className="min-h-[200px]">{children}</section>
          <footer className="bg-blue-300">Footer</footer>
        </div>
      </section>
    </main>
  );
};
