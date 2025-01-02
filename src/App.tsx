import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import Schedule from "@/pages/Schedule";
import Students from "@/pages/Students";
import Classes from "@/pages/Classes";
import Login from "@/pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/schedule"
            element={
              <Layout>
                <Schedule />
              </Layout>
            }
          />
          <Route
            path="/students"
            element={
              <Layout>
                <Students />
              </Layout>
            }
          />
          <Route
            path="/classes"
            element={
              <Layout>
                <Classes />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;