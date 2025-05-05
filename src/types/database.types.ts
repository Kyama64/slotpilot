
export interface User {
  id: string;
  email: string;
  password: string;
  businessName: string;
  phone: string;
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  price: number | null;
  duration: number;
  userId: string;
}

export interface Availability {
  id: string;
  userId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface BlockedDate {
  id: string;
  userId: string;
  date: string;
  reason: string | null;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  startTime: string;
  endTime: string;
  status: string;
  createdAt: string;
}
