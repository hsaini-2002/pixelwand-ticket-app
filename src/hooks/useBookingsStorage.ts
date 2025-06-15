import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBooking } from '../context/BookingContext';
import { Booking } from '../types';

const STORAGE_KEY = '@bookings';

export const useBookingsStorage = () => {
  const { state, dispatch } = useBooking();

  // Load bookings from storage on mount
  useEffect(() => {
    const loadBookings = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const storedBookings = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedBookings) {
          const bookings: Booking[] = JSON.parse(storedBookings);
          dispatch({ type: 'SET_BOOKINGS', payload: bookings });
        }
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load bookings' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadBookings();
  }, []);

  // Save bookings to storage whenever they change
  useEffect(() => {
    const saveBookings = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.bookings));
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to save bookings' });
      }
    };

    saveBookings();
  }, [state.bookings]);

  return null;
}; 