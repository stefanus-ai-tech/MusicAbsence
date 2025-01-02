import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Users, Briefcase } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("teacher");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Welcome back! Logged in as ${role}`);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8 space-y-6 bg-white/80 backdrop-blur-sm shadow-xl">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500">Sign in to Nature Music Academy</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <RadioGroup
              defaultValue="teacher"
              className="grid grid-cols-3 gap-4"
              onValueChange={setRole}
            >
              <div>
                <RadioGroupItem
                  value="teacher"
                  id="teacher"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="teacher"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <User className="mb-2 h-6 w-6" />
                  <span className="text-sm font-medium">Teacher</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="student"
                  id="student"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="student"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <Users className="mb-2 h-6 w-6" />
                  <span className="text-sm font-medium">Student</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="admin"
                  id="admin"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="admin"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <Briefcase className="mb-2 h-6 w-6" />
                  <span className="text-sm font-medium">Admin</span>
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;