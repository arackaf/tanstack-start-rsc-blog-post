import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/best-sellers")({
  component: BestSellersRoute,
});

function BestSellersRoute() {
  return <div>Best Sellers</div>;
}
