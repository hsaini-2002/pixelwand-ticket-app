import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SeatSelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  maxSeats?: number;
}

export const SeatSelector: React.FC<SeatSelectorProps> = ({
  quantity,
  onQuantityChange,
  maxSeats = 10,
}) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxSeats) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of Tickets</Text>
      <View style={styles.selector}>
        <TouchableOpacity
          style={[styles.button, quantity <= 1 && styles.buttonDisabled]}
          onPress={handleDecrease}
          disabled={quantity <= 1}
        >
          <Ionicons name="remove" size={24} color={quantity <= 1 ? '#ccc' : '#000'} />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={[styles.button, quantity >= maxSeats && styles.buttonDisabled]}
          onPress={handleIncrease}
          disabled={quantity >= maxSeats}
        >
          <Ionicons name="add" size={24} color={quantity >= maxSeats ? '#ccc' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#f8f8f8',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: 'center',
  },
}); 