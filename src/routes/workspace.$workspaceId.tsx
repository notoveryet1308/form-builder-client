import WorkspaceContent from "@/pages/workspace/components/workspaceContent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/$workspaceId")({
  component: WorkspaceContent,
});
