import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Users, Clock } from "lucide-react";
import { useRole } from "@/contexts/RoleContext";
import { rolePermissions } from "@/types/roles";
import { toast } from "sonner";

interface ClassDetailsProps {
  classData: {
    id: number;
    name: string;
    students: number;
    schedule: string;
    instructor: string;
    grade: string;
    description: string;
    capacity: number;
    duration: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export function ClassDetails({ classData, onEdit, onDelete }: ClassDetailsProps) {
  const { role } = useRole();
  const permissions = rolePermissions[role];

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      onDelete();
      toast.success("Class deleted successfully!");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{classData.name}</h3>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {classData.students} / {classData.capacity} students
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {classData.schedule}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Instructor</Label>
          <span className="col-span-2">{classData.instructor}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Grade Level</Label>
          <span className="col-span-2">{classData.grade}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Duration</Label>
          <span className="col-span-2">{classData.duration}</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Description</Label>
          <span className="col-span-2">{classData.description}</span>
        </div>
      </div>

      {(permissions.canUpdate || permissions.canDelete) && (
        <div className="flex justify-end gap-2 mt-4">
          {permissions.canUpdate && (
            <Button onClick={onEdit} variant="outline">
              Edit Class
            </Button>
          )}
          {permissions.canDelete && (
            <Button onClick={handleDelete} variant="destructive">
              Delete Class
            </Button>
          )}
        </div>
      )}
    </div>
  );
}