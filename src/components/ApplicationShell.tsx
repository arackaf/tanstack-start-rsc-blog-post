import type { FC, PropsWithChildren } from "react";
import { SideBarContent } from "./SideBarContent";

export const ApplicationShell: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <main className="h-screen">
      <header className="fixed top-0 left-0 right-0 h-12 z-10 bg-blue-200">Header</header>
      <section className="fixed left-0 top-12 bottom-0 w-60 overflow-auto ">
        <SideBarContent />
      </section>
      <section className="max-w-[600px] pt-16 mx-auto h-full">
        <div className="flex flex-col gap-2 h-full">
          <section className="min-h-[200px]">{children}</section>
          <footer className="fixed bottom-0 left-0 right-0 h-12 z-10 bg-blue-200">Footer</footer>
        </div>
      </section>
    </main>
  );
};
