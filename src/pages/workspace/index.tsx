import { Link, Outlet } from "@tanstack/react-router";

const WorkspacePage = () => {
  return (
    <div className="flex flex-col h-lvh">
      <header className="p-2 text-black border-b border-blue-400">
        header
      </header>
      <div className="flex-1 grid grid-cols-[25%_1fr] ">
        <div className="border-r border-blue-400 flex flex-col gap-2">
          <button>Create new form +</button>
          <Link to="/workspace/$workspaceId" params={{ workspaceId: "1" }}>
            Workspace - Form 1
          </Link>
          <Link to="/workspace/$workspaceId" params={{ workspaceId: "2" }}>
            Workspace - Form 2
          </Link>
        </div>
        <div className="">
          main content
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
