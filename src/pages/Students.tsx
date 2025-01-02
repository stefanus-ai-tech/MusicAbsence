import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Music, DollarSign } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

interface Student {
  id: number;
  name: string;
  instrument: string;
  grade: string;
  status: "Paid" | "Unpaid";
  nextPayment: string;
}

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  
  // Mock data - replace with actual data from your backend
  const students: Student[] = [
    { id: 1, name: "Alice Smith", instrument: "Piano", grade: "Grade 2", status: "Paid", nextPayment: "Feb 1, 2024" },
    { id: 2, name: "Bob Johnson", instrument: "Violin", grade: "Grade 3", status: "Unpaid", nextPayment: "Jan 15, 2024" },
    { id: 3, name: "Carol White", instrument: "Guitar", grade: "Grade 1", status: "Paid", nextPayment: "Feb 1, 2024" },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddStudent = () => {
    // This would typically open a form to add a new student
    toast.info("Add student functionality will be implemented here");
  };

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="space-y-8 fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
          <p className="text-gray-500">Manage your students and their progress</p>
        </div>
        <Button onClick={handleAddStudent} className="sm:self-start">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search students..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h3 className="font-medium">{student.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Music className="h-4 w-4" />
                    {student.instrument} • {student.grade}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Badge variant={student.status === "Paid" ? "outline" : "destructive"}>
                  {student.status}
                </Badge>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  Next: {student.nextPayment}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails(student)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Student Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Name</h4>
                        <p>{student.name}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Instrument</h4>
                        <p>{student.instrument}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Grade</h4>
                        <p>{student.grade}</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Payment Status</h4>
                        <Badge variant={student.status === "Paid" ? "outline" : "destructive"}>
                          {student.status}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-medium">Next Payment</h4>
                        <p>{student.nextPayment}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No students found matching your search.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Students;