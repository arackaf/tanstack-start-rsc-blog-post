import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/your-account")({
  component: YourAccountRoute,
});

function YourAccountRoute() {
  return <div />;
}
