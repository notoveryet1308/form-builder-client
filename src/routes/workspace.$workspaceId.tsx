import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/workspace/$workspaceId")({
  component: WorkspaceContent,
});

function WorkspaceContent() {
  const { workspaceId } = useParams({ from: "/workspace/$workspaceId" });
  return <div>Workspace content {workspaceId}</div>;
}
