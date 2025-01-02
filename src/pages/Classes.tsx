import { Card } from "@/components/ui/card";

const Classes = () => {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
        <p className="text-gray-500">Manage your music classes</p>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Coming Soon</h2>
        <p className="text-gray-500">The class management interface is under development.</p>
      </Card>
    </div>
  );
};

export default Classes;