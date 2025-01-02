import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import { RoleProvider } from "@/contexts/RoleContext";

function App() {
  return (
    <RoleProvider>
      <Router>
        <Layout />
        <Toaster />
      </Router>
    </RoleProvider>
  );
}

export default App;