import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/empty")({
  component: EmptyRoute,
});

function EmptyRoute() {
  return <div />;
}
