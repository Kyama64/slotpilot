
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { CalendarX, Clock, CalendarClock } from "lucide-react";

// Mock data for blocked dates - in a real app, this would come from the database
const initialBlockedDates = [
  {
    id: "1",
    date: new Date("2025-05-20"),
    reason: "Holiday"
  },
  {
    id: "2",
    date: new Date("2025-05-25"),
    reason: "Personal Appointment"
  }
];

// Mock weekly availability
const initialWeeklyAvailability = {
  monday: { enabled: true, start: "09:00", end: "17:00" },
  tuesday: { enabled: true, start: "09:00", end: "17:00" },
  wednesday: { enabled: true, start: "09:00", end: "17:00" },
  thursday: { enabled: true, start: "09:00", end: "17:00" },
  friday: { enabled: true, start: "09:00", end: "17:00" },
  saturday: { enabled: false, start: "10:00", end: "15:00" },
  sunday: { enabled: false, start: "10:00", end: "15:00" },
};

type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface BlockedDate {
  id: string;
  date: Date;
  reason: string;
}

interface DayAvailability {
  enabled: boolean;
  start: string;
  end: string;
}

interface WeeklyAvailability {
  [key: string]: DayAvailability;
}

const AvailabilityManager = () => {
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>(initialBlockedDates);
  const [weeklyAvailability, setWeeklyAvailability] = useState<WeeklyAvailability>(initialWeeklyAvailability);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [blockReason, setBlockReason] = useState("");
  const [isAddingBlock, setIsAddingBlock] = useState(false);
  
  const handleToggleDay = (day: DayOfWeek) => {
    setWeeklyAvailability({
      ...weeklyAvailability,
      [day]: {
        ...weeklyAvailability[day],
        enabled: !weeklyAvailability[day].enabled
      }
    });
  };

  const handleTimeChange = (day: DayOfWeek, field: 'start' | 'end', value: string) => {
    setWeeklyAvailability({
      ...weeklyAvailability,
      [day]: {
        ...weeklyAvailability[day],
        [field]: value
      }
    });
  };

  const handleSaveAvailability = () => {
    // Here you'd make an API call to save to database
    toast.success("Availability settings saved successfully!");
  };

  const handleAddBlockedDate = () => {
    if (!selectedDate) {
      toast.error("Please select a date first");
      return;
    }
    
    if (!blockReason.trim()) {
      toast.error("Please provide a reason for blocking this date");
      return;
    }
    
    // Check if date is already blocked
    const isDateAlreadyBlocked = blockedDates.some(
      (blockedDate) => blockedDate.date.toDateString() === selectedDate.toDateString()
    );
    
    if (isDateAlreadyBlocked) {
      toast.error("This date is already blocked");
      return;
    }
    
    const newBlockedDate = {
      id: Date.now().toString(),
      date: selectedDate,
      reason: blockReason
    };
    
    setBlockedDates([...blockedDates, newBlockedDate]);
    setSelectedDate(undefined);
    setBlockReason("");
    setIsAddingBlock(false);
    
    toast.success("Date blocked successfully");
  };

  const handleRemoveBlockedDate = (id: string) => {
    setBlockedDates(blockedDates.filter(date => date.id !== id));
    toast.success("Blocked date removed");
  };
  
  const isDateBlocked = (date: Date): boolean => {
    return blockedDates.some(
      (blockedDate) => blockedDate.date.toDateString() === date.toDateString()
    );
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Manage Availability</CardTitle>
        <CardDescription>
          Set your regular hours and block specific dates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">
              <Clock className="h-4 w-4 mr-2" />
              Weekly Hours
            </TabsTrigger>
            <TabsTrigger value="blocked">
              <CalendarX className="h-4 w-4 mr-2" />
              Blocked Dates
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="space-y-4">
            <div className="space-y-4">
              {Object.entries(weeklyAvailability).map(([day, { enabled, start, end }]) => (
                <div key={day} className="flex items-center space-x-4 p-3 border rounded-md bg-gray-50">
                  <div className="w-24 font-medium capitalize">{day}</div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => handleToggleDay(day as DayOfWeek)}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        {enabled ? "Available" : "Unavailable"}
                      </span>
                    </label>
                  </div>
                  {enabled && (
                    <div className="flex items-center space-x-2 flex-grow">
                      <input
                        type="time"
                        value={start}
                        onChange={(e) => handleTimeChange(day as DayOfWeek, 'start', e.target.value)}
                        className="w-full max-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                      <span className="text-gray-500">to</span>
                      <input
                        type="time"
                        value={end}
                        onChange={(e) => handleTimeChange(day as DayOfWeek, 'end', e.target.value)}
                        className="w-full max-w-[120px] rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                  )}
                </div>
              ))}
              
              <Button onClick={handleSaveAvailability} className="mt-4">
                Save Weekly Availability
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="blocked" className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="md:w-1/2 space-y-4">
                <Dialog open={isAddingBlock} onOpenChange={setIsAddingBlock}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mb-4">
                      <CalendarX className="h-4 w-4 mr-2" />
                      Block a Date
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Block a Date</DialogTitle>
                      <DialogDescription>
                        Select a date and provide a reason for blocking it.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex justify-center my-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border p-3 pointer-events-auto"
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || isDateBlocked(date);
                        }}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="block-reason">Reason</Label>
                      <Input
                        id="block-reason"
                        value={blockReason}
                        onChange={(e) => setBlockReason(e.target.value)}
                        placeholder="E.g. Holiday, Personal Day, etc."
                      />
                    </div>
                    
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddingBlock(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddBlockedDate}>
                        Block Date
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                {blockedDates.length > 0 ? (
                  <div className="space-y-2">
                    {blockedDates.map((blockedDate) => (
                      <div key={blockedDate.id} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                        <div>
                          <p className="font-medium">
                            {blockedDate.date.toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-sm text-gray-500">{blockedDate.reason}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveBlockedDate(blockedDate.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center text-gray-500 border rounded-md">
                    No blocked dates yet
                  </div>
                )}
              </div>
              
              <div className="hidden md:block md:w-1/2 border rounded-md p-4 bg-gray-50">
                <h3 className="font-medium mb-2">About Blocked Dates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Blocking a date will make you unavailable for all bookings on that day.
                  This is useful for holidays, vacation days, or any other time you know
                  you won't be available.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <h4 className="text-sm font-medium text-blue-800 mb-1">Pro Tip</h4>
                  <p className="text-xs text-blue-700">
                    You can also adjust your weekly availability for recurring 
                    patterns instead of blocking individual dates.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AvailabilityManager;
