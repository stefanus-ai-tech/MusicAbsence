import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock data - replace with actual data from your backend
  const sessions = [
    { time: "09:00", student: "Alice Smith", instrument: "Piano", grade: "Grade 2" },
    { time: "10:00", student: "Bob Johnson", instrument: "Violin", grade: "Grade 3" },
    { time: "14:00", student: "Carol White", instrument: "Guitar", grade: "Grade 1" },
  ];

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Class Schedule</h1>
        <p className="text-gray-500">Manage your weekly classes and sessions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Calendar
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Sessions
          </h2>
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="w-16">
                    {session.time}
                  </Badge>
                  <div>
                    <h3 className="font-medium">{session.student}</h3>
                    <p className="text-sm text-gray-500">
                      {session.instrument} • {session.grade}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Mark Attendance
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;