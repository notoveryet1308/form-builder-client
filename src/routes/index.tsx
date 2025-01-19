import ProductLogo from "@/components/ProductLogo";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="h-lvh w[100%] flex flex-col">
      <header className="flex pt-4 pb-4 pl-6 pr-6 bg-fade-bg items-center justify-between border-b border-fade-border">
        <ProductLogo />
        <div className="flex gap-4">
          <Button className="">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
