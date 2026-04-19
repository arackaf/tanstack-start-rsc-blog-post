import type { FC, PropsWithChildren } from "react";

export const ApplicationShell: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <main>
      <header className="fixed top-0 left-0 right-0 h-12 z-10 bg-blue-200">Header</header>
      <section className="fixed left-0 top-12 bottom-0 w-30 overflow-auto bg-amber-200">Sidebar</section>
      <section className="max-w-[600px] mx-auto">
        <div className="flex flex-col gap-2">
          <section className="min-h-[200px]">{children}</section>
          <footer className="bg-blue-300">Footer</footer>
        </div>
      </section>
    </main>
  );
};
