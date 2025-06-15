import React from 'react';
import { Navigation } from './src/navigation';
import { BookingProvider } from './src/context/BookingContext';
import { useBookingsStorage } from './src/hooks/useBookingsStorage';

export default function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  );
}

function AppContent() {
  useBookingsStorage();
  return <Navigation />;
}
