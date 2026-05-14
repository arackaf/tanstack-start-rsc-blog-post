import type { FC, PropsWithChildren } from "react";
import { SideBarContent } from "./SideBarContent";

type ApplicationShellProps = {
  HeaderContent?: FC<{ avatar: string }>;
  FooterContent: FC;
};

export const ApplicationShell: FC<PropsWithChildren<ApplicationShellProps>> = (props) => {
  const { children, HeaderContent, FooterContent } = props;

  const avatar = "https://d193qjyckdxivp.cloudfront.net/avatar.jpg";

  return (
    <main className="h-screen">
      <header className="fixed top-0 left-0 right-0 h-12 z-10 bg-blue-200 flex items-center px-4 gap-4">
        <span className="w-6 h-6">{HeaderContent ? <HeaderContent avatar={avatar} /> : null}</span>
        <span>Header</span>
      </header>
      <section className="fixed left-0 top-12 bottom-0 w-60 overflow-auto ">
        <SideBarContent />
      </section>
      <section className="max-w-[600px] pt-16 mx-auto h-full">
        <div className="flex flex-col gap-2 h-full">
          <section className="min-h-[200px]">{children}</section>
          <footer className="px-4 fixed bottom-0 left-0 right-0 h-12 z-10 bg-blue-200 flex gap-4 items-center">
            <FooterContent />
          </footer>
        </div>
      </section>
    </main>
  );
};
