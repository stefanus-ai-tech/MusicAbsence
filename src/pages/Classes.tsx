import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRole } from "@/contexts/RoleContext";
import { rolePermissions } from "@/types/roles";
import { ClassForm } from "@/components/classes/ClassForm";
import { ClassDetails } from "@/components/classes/ClassDetails";

interface Class {
  id: number;
  name: string;
  students: number;
  schedule: string;
  instructor: string;
  grade: string;
  description: string;
  capacity: number;
  duration: string;
}

const Classes = () => {
  const { role } = useRole();
  const permissions = rolePermissions[role];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [classes, setClasses] = useState<Class[]>([
    { 
      id: 1,
      name: "Piano Beginners", 
      students: 5, 
      schedule: "Mon, Wed 15:00", 
      instructor: "John Doe",
      grade: "Grade 1",
      description: "Introduction to piano basics",
      capacity: 8,
      duration: "45 minutes"
    },
    { 
      id: 2,
      name: "Violin Advanced", 
      students: 3, 
      schedule: "Tue, Thu 16:00", 
      instructor: "Jane Smith",
      grade: "Grade 3",
      description: "Advanced violin techniques",
      capacity: 5,
      duration: "60 minutes"
    },
  ]);

  const handleCreateClass = (formData: Omit<Class, "id" | "students">) => {
    const newClass = {
      id: classes.length + 1,
      students: 0,
      ...formData,
    };
    setClasses([...classes, newClass]);
  };

  const handleUpdateClass = (formData: Omit<Class, "id" | "students">) => {
    if (!selectedClass) return;
    
    const updatedClass = {
      ...selectedClass,
      ...formData,
    };
    
    setClasses(classes.map(c => c.id === selectedClass.id ? updatedClass : c));
    setSelectedClass(null);
    setIsEditing(false);
  };

  const handleDeleteClass = (id: number) => {
    setClasses(classes.filter(c => c.id !== id));
    setSelectedClass(null);
  };

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
          <p className="text-gray-500">Manage your music classes</p>
        </div>
        {permissions.canCreate && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="sm:self-start">
                <Plus className="h-4 w-4 mr-2" />
                Create Class
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Class</DialogTitle>
              </DialogHeader>
              <ClassForm onSubmit={handleCreateClass} mode="create" />
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search classes..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h3 className="font-medium">{cls.name}</h3>
                  <p className="text-sm text-gray-500">Instructor: {cls.instructor}</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Class Details</DialogTitle>
                  </DialogHeader>
                  <ClassDetails
                    classData={cls}
                    onEdit={() => {
                      setSelectedClass(cls);
                      setIsEditing(true);
                    }}
                    onDelete={() => handleDeleteClass(cls.id)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
          {filteredClasses.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No classes found matching your search.
            </div>
          )}
        </div>
      </Card>

      {isEditing && selectedClass && (
        <Dialog open={isEditing} onOpenChange={(open) => !open && setIsEditing(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Class</DialogTitle>
            </DialogHeader>
            <ClassForm
              mode="edit"
              initialData={selectedClass}
              onSubmit={handleUpdateClass}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Classes;