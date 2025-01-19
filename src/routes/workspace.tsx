import WorkspacePage from "@/pages/workspace";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace")({
  component: WorkspacePage,
});
