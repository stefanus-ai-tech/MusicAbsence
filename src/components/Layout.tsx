import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Home, LogOut, Menu, Music, Users, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Calendar, label: "Schedule", path: "/schedule" },
    { icon: Users, label: "Students", path: "/students" },
    { icon: Music, label: "Classes", path: "/classes" },
  ];

  const MenuContent = () => (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900">Nature Music Academy</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "secondary" : "ghost"}
            className={`w-full justify-start gap-2 ${
              isActive(item.path) ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              navigate(item.path);
              setIsOpen(false);
            }}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <Button
        variant="ghost"
        className="justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
        onClick={() => navigate("/login")}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Nature Music Academy</h1>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <MenuContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:fixed md:flex h-screen w-64 bg-white/80 backdrop-blur-lg border-r border-gray-200 p-4">
          <MenuContent />
        </div>

        {/* Main Content */}
        <div className="w-full md:ml-64 p-8 pt-20 md:pt-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;