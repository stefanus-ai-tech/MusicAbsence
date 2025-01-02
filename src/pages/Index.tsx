import { Card } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";

const Index = () => {
  const stats = [
    {
      title: "Total Students",
      value: "42",
      icon: Users,
      trend: "+5% from last month",
    },
    {
      title: "Classes Today",
      value: "8",
      icon: Clock,
      trend: "2 more than yesterday",
    },
    {
      title: "Monthly Revenue",
      value: "Rp 8.4M",
      icon: DollarSign,
      trend: "+12% from last month",
    },
    {
      title: "Upcoming Sessions",
      value: "15",
      icon: Calendar,
      trend: "Next 7 days",
    },
  ];

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Teacher</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{stat.trend}</p>
              </div>
              <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">Guitar Class - Grade 2</p>
                    <p className="text-sm text-gray-500">3 students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">14:00 - 15:00</p>
                  <p className="text-sm text-gray-500">Room 101</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Status</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">Student Name</p>
                    <p className="text-sm text-gray-500">Guitar - Grade 2</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Rp 200.000</p>
                  <p className="text-sm text-green-500">Paid</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;