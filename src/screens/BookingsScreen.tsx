import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useBooking } from '../context/BookingContext';
import { Ionicons } from '@expo/vector-icons';

export default function BookingsScreen() {
  const { state, dispatch } = useBooking();
  const { bookings } = state;

  const handleCancelBooking = (bookingId: string) => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch({ type: 'REMOVE_BOOKING', payload: bookingId });
          },
        },
      ]
    );
  };

  const renderBookingItem = ({ item }) => (
    <View style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <Text style={styles.eventTitle}>{item.event.title}</Text>
        <TouchableOpacity
          onPress={() => handleCancelBooking(item.id)}
          style={styles.cancelButton}
        >
          <Ionicons name="close-circle" size={24} color="#ff4444" />
        </TouchableOpacity>
      </View>

      <Text style={styles.bookingDate}>
        {new Date(item.bookingDate).toLocaleDateString()}
      </Text>
      <Text style={styles.bookingDetails}>
        {item.quantity} {item.quantity === 1 ? 'ticket' : 'tickets'} × ${item.event.price}
      </Text>
      <Text style={styles.totalPrice}>Total: ${item.totalPrice}</Text>
    </View>
  );

  if (bookings.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="ticket-outline" size={64} color="#ccc" />
        <Text style={styles.emptyText}>No bookings yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        renderItem={renderBookingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  cancelButton: {
    padding: 4,
  },
  bookingDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  bookingDetails: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 16,
  },
}); 