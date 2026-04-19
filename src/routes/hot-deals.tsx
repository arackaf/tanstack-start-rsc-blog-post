import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hot-deals")({
  component: HotDealsRoute,
});

function HotDealsRoute() {
  return <div />;
}
