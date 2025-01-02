import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import { RoleProvider } from "@/contexts/RoleContext";
import Classes from "@/pages/Classes";
import Students from "@/pages/Students";
import Schedule from "@/pages/Schedule";
import Login from "@/pages/Login";

function App() {
  return (
    <RoleProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/students" element={<Students />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<Classes />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </RoleProvider>
  );
}

export default App;