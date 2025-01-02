import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Users, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [classes, setClasses] = useState([
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
    { 
      id: 3,
      name: "Guitar Intermediate", 
      students: 4, 
      schedule: "Fri 14:00", 
      instructor: "Mike Johnson",
      grade: "Grade 2",
      description: "Intermediate guitar lessons",
      capacity: 6,
      duration: "45 minutes"
    },
  ]);

  const [newClass, setNewClass] = useState({
    name: "",
    instructor: "",
    schedule: "",
    grade: "",
    capacity: "",
    duration: "",
    description: ""
  });

  const handleCreateClass = () => {
    const classData = {
      id: classes.length + 1,
      ...newClass,
      students: 0,
    };
    setClasses([...classes, classData]);
    toast.success("New class created successfully!");
    setNewClass({
      name: "",
      instructor: "",
      schedule: "",
      grade: "",
      capacity: "",
      duration: "",
      description: ""
    });
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="sm:self-start">
              <Plus className="h-4 w-4 mr-2" />
              Create Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Class</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Class Name</Label>
                <Input
                  id="name"
                  value={newClass.name}
                  onChange={(e) => setNewClass({...newClass, name: e.target.value})}
                  placeholder="Enter class name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Input
                  id="instructor"
                  value={newClass.instructor}
                  onChange={(e) => setNewClass({...newClass, instructor: e.target.value})}
                  placeholder="Enter instructor name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="schedule">Schedule</Label>
                <Input
                  id="schedule"
                  value={newClass.schedule}
                  onChange={(e) => setNewClass({...newClass, schedule: e.target.value})}
                  placeholder="e.g., Mon, Wed 15:00"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Input
                  id="grade"
                  value={newClass.grade}
                  onChange={(e) => setNewClass({...newClass, grade: e.target.value})}
                  placeholder="Enter grade level"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    value={newClass.capacity}
                    onChange={(e) => setNewClass({...newClass, capacity: e.target.value})}
                    placeholder="Max students"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={newClass.duration}
                    onChange={(e) => setNewClass({...newClass, duration: e.target.value})}
                    placeholder="e.g., 45 minutes"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newClass.description}
                  onChange={(e) => setNewClass({...newClass, description: e.target.value})}
                  placeholder="Enter class description"
                />
              </div>
              <Button onClick={handleCreateClass}>Create Class</Button>
            </div>
          </DialogContent>
        </Dialog>
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {cls.students} students
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {cls.schedule}
                </Badge>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{cls.name}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Instructor</Label>
                        <span className="col-span-2">{cls.instructor}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Schedule</Label>
                        <span className="col-span-2">{cls.schedule}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Grade Level</Label>
                        <span className="col-span-2">{cls.grade}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Students</Label>
                        <span className="col-span-2">{cls.students} / {cls.capacity}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Duration</Label>
                        <span className="col-span-2">{cls.duration}</span>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label>Description</Label>
                        <span className="col-span-2">{cls.description}</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
          {filteredClasses.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No classes found matching your search.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Classes;