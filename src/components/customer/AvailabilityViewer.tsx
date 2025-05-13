
import { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, CalendarClock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface AvailabilityViewerProps {
  providerId: string;
  serviceId?: string;
  onTimeSelected?: (date: Date, timeSlot: TimeSlot) => void;
}

const AvailabilityViewer = ({ providerId, serviceId, onTimeSelected }: AvailabilityViewerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const { toast } = useToast();

  // In a real app, fetch this from the API based on providerId and selectedDate
  useEffect(() => {
    if (selectedDate) {
      // Mock API call to fetch available time slots
      // In a real app, this would come from your backend API
      fetchAvailableTimeSlots();
    }
  }, [selectedDate, providerId, serviceId]);

  // Mock function to fetch available time slots
  const fetchAvailableTimeSlots = () => {
    // In a real app, call your API here
    
    // Mock data
    const mockTimeSlots = [
      { id: "1", time: "9:00 AM", available: true },
      { id: "2", time: "10:00 AM", available: true },
      { id: "3", time: "11:00 AM", available: false },
      { id: "4", time: "12:00 PM", available: true },
      { id: "5", time: "1:00 PM", available: true },
      { id: "6", time: "2:00 PM", available: false },
      { id: "7", time: "3:00 PM", available: true },
      { id: "8", time: "4:00 PM", available: true },
    ];

    // Mock blocked dates
    const mockBlockedDates = [
      new Date("2025-05-20"),
      new Date("2025-05-25"),
    ];

    setAvailableTimeSlots(mockTimeSlots);
    setBlockedDates(mockBlockedDates);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);  // Reset time slot selection when date changes
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
    
    if (onTimeSelected && selectedDate) {
      const selectedSlot = availableTimeSlots.find(slot => slot.id === slotId);
      if (selectedSlot) {
        onTimeSelected(selectedDate, selectedSlot);
      }
    }
  };

  const isDateBlocked = (date: Date): boolean => {
    return blockedDates.some(
      (blockedDate) => blockedDate.toDateString() === date.toDateString()
    );
  };

  // Function to determine if a date should be disabled
  const isDateDisabled = (date: Date): boolean => {
    // Disable past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable blocked dates
    return date < today || isDateBlocked(date);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CalendarClock className="h-5 w-5 mr-2 text-primary" />
          Available Time Slots
        </CardTitle>
        <CardDescription>
          Select a date and time for your appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="mb-2 text-sm font-medium">Select a Date</p>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border p-3 pointer-events-auto mb-4"
              disabled={isDateDisabled}
            />
            
            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-2 text-xs">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-gray-300 mr-1"></div>
                <span>Unavailable</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            {selectedDate ? (
              <>
                <p className="mb-2 text-sm font-medium">
                  Time Slots for {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                {isDateBlocked(selectedDate) ? (
                  <div className="flex flex-col items-center justify-center h-40 text-center">
                    <Badge variant="destructive" className="mb-2">Provider Unavailable</Badge>
                    <p className="text-sm text-gray-500">
                      This date is not available for booking. Please select another date.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimeSlots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                        className={`flex items-center justify-center ${
                          !slot.available ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={!slot.available}
                        onClick={() => handleTimeSlotSelect(slot.id)}
                      >
                        <Clock className="h-3 w-3 mr-2" />
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-40 text-center">
                <p className="text-gray-500">Please select a date to view available time slots</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityViewer;
