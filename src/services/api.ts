import axios from 'axios';
import { Event } from '../types';

// Using JSON Server for mock data
const API_URL = 'http://192.168.1.4:3000';

export const api = {
  getEvents: async (): Promise<Event[]> => {
    try {
      const response = await axios.get(`${API_URL}/events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  getEvent: async (id: string): Promise<Event> => {
    try {
      const response = await axios.get(`${API_URL}/events/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event ${id}:`, error);
      throw error;
    }
  },
}; 