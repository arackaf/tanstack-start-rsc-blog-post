import { Suspense, use, type FC, type PropsWithChildren } from "react";
import { SideBarContent } from "./SideBarContent";
import { SidePanelTrigger } from "./SidePanelTrigger";

type ApplicationShellProps = {
  user: Promise<{
    name: string;
    avatar: string;
  }>;
  FooterContent?: FC;
};

export const ApplicationShellNonRSC: FC<PropsWithChildren<ApplicationShellProps>> = (props) => {
  const { children, FooterContent, user } = props;

  return (
    <main className="h-screen">
      <header className="fixed top-0 left-0 right-0 h-12 z-10 bg-blue-200 flex items-center px-4 gap-4">
        <Suspense fallback={<span className="w-6 h-6 bg-gray-400 rounded-full"></span>}>
          <UserHeaderMenu user={user} />
        </Suspense>
        <span>Header</span>
      </header>
      <section className="fixed left-0 top-12 bottom-0 w-60 overflow-auto ">
        <SideBarContent />
      </section>
      <section className="max-w-[600px] pt-16 mx-auto h-full">
        <div className="flex flex-col gap-2 h-full">
          <section className="min-h-[200px]">{children}</section>
          <footer className="px-4 fixed bottom-0 left-0 right-0 h-12 z-10 bg-blue-200 flex gap-4 items-center">
            {FooterContent ? <FooterContent /> : null}
          </footer>
        </div>
      </section>
    </main>
  );
};

const UserHeaderMenu: FC<{ user: Promise<{ name: string; avatar: string }> }> = async (props) => {
  const { user } = props;
  const { name, avatar } = await use(user);

  return <SidePanelTrigger name={name} avatar={avatar} />;
};
