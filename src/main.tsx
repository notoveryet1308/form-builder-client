import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";

import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
