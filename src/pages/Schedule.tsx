import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, Check, X } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sessions, setSessions] = useState([
    { id: 1, time: "09:00", student: "Alice Smith", instrument: "Piano", grade: "Grade 2", attended: null },
    { id: 2, time: "10:00", student: "Bob Johnson", instrument: "Violin", grade: "Grade 3", attended: null },
    { id: 3, time: "14:00", student: "Carol White", instrument: "Guitar", grade: "Grade 1", attended: null },
  ]);

  const handleAttendance = (id: number, status: boolean) => {
    setSessions(sessions.map(session => 
      session.id === id ? { ...session, attended: status } : session
    ));
    toast.success(`Attendance marked for ${sessions.find(s => s.id === id)?.student}`);
  };

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Class Schedule</h1>
        <p className="text-gray-500">Manage your weekly classes and sessions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 order-2 lg:order-1">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Sessions
          </h2>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border bg-white/50 hover:bg-white/80 transition-colors gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Badge variant="outline" className="w-16 shrink-0">
                    {session.time}
                  </Badge>
                  <div>
                    <h3 className="font-medium">{session.student}</h3>
                    <p className="text-sm text-gray-500">
                      {session.instrument} • {session.grade}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <Button
                    variant={session.attended === true ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleAttendance(session.id, true)}
                    className="flex-1 sm:flex-none"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Present
                  </Button>
                  <Button
                    variant={session.attended === false ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => handleAttendance(session.id, false)}
                    className="flex-1 sm:flex-none"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Absent
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 order-1 lg:order-2">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Calendar
          </h2>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border max-w-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;