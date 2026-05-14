import { cn } from "#/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="flex flex-col gap-2">
      <div className={cn("text-2xl font-bold text-pink-500", "-translate-y-12")}>Index</div>
    </main>
  );
}
