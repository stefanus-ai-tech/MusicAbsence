import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface ClassFormData {
  name: string;
  instructor: string;
  schedule: string;
  grade: string;
  capacity: number;
  duration: string;
  description: string;
}

interface ClassFormProps {
  onSubmit: (data: ClassFormData) => void;
  initialData?: ClassFormData;
  mode: "create" | "edit";
}

export function ClassForm({ onSubmit, initialData, mode }: ClassFormProps) {
  const [formData, setFormData] = useState<ClassFormData>(
    initialData || {
      name: "",
      instructor: "",
      schedule: "",
      grade: "",
      capacity: 0,
      duration: "",
      description: "",
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    toast.success(`Class ${mode === "create" ? "created" : "updated"} successfully!`);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Class Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter class name"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="instructor">Instructor</Label>
        <Input
          id="instructor"
          value={formData.instructor}
          onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
          placeholder="Enter instructor name"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="schedule">Schedule</Label>
        <Input
          id="schedule"
          value={formData.schedule}
          onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
          placeholder="e.g., Mon, Wed 15:00"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="grade">Grade Level</Label>
        <Input
          id="grade"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          placeholder="Enter grade level"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            id="capacity"
            type="number"
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
            placeholder="Max students"
            required
            min={1}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            placeholder="e.g., 45 minutes"
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Enter class description"
          required
        />
      </div>
      <Button type="submit">
        {mode === "create" ? "Create Class" : "Update Class"}
      </Button>
    </form>
  );
}