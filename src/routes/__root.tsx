import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { createCompositeComponent, CompositeComponent } from "@tanstack/react-start/rsc";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import { ApplicationShell } from "#/components/ApplicationShell";
import { createServerFn } from "@tanstack/react-start";
import type { FC, PropsWithChildren } from "react";
import { SidePanelTrigger } from "#/components/SidePanelTrigger";

const getAppShell = createServerFn({
  method: "GET",
}).handler(async () => {
  return createCompositeComponent(
    (
      props: PropsWithChildren<{
        HeaderContent?: FC<{ avatar: string }>;
      }>,
    ) => <ApplicationShell children={props.children} HeaderContent={props.HeaderContent} />,
  );
});

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: async () => {
    const appShell = await getAppShell();
    return { appShell };
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        <CompositeComponent src={appShell} HeaderContent={SidePanelTrigger}>
          {children}
        </CompositeComponent>

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
