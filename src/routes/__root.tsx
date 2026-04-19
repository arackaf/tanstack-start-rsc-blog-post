import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { createFromReadableStream, renderServerComponent } from "@tanstack/react-start/rsc";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import { ApplicationShell } from "#/components/ApplicationShell";
import { createServerFn } from "@tanstack/react-start";

const getAppShell = createServerFn({
  method: "GET",
}).handler(async () => {
  return renderServerComponent(<ApplicationShell />);
});

const getJunk = createServerFn({
  method: "GET",
}).handler(async () => {
  return Math.random();
});

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  // shouldReload: (x) => true,
  loader: async () => {
    console.log("__root loader");
    // const junk = await getJunk();

    const appShell = await getAppShell();
    return { appShell };
    // return { junk };
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  staleTime: 1000 * 60 * 20,
  gcTime: 1000 * 60 * 20,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { appShell } = Route.useLoaderData();
  // const { junk } = Route.useLoaderData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        {/* <ApplicationShell>{children}</ApplicationShell> */}
        {appShell}
        {/* {junk} */}
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
