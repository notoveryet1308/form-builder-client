import { useParams } from "@tanstack/react-router";

const WorkspaceContent = () => {
  const { workspaceId } = useParams({ from: "/workspace/$workspaceId" });
  return <div>Workspace content {workspaceId}</div>;
};

export default WorkspaceContent;
