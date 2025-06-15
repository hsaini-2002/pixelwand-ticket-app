export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export interface Booking {
  id: string;
  eventId: string;
  event: Event;
  quantity: number;
  totalPrice: number;
  bookingDate: string;
}

export interface BookingState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
}

export type BookingAction =
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'REMOVE_BOOKING'; payload: string }
  | { type: 'SET_BOOKINGS'; payload: Booking[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }; 