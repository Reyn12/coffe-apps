import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import type { Coffee } from '@/data/coffeeData';

interface CoffeeCardProps {
  coffee: Coffee;
  onPress?: () => void;
}

export function CoffeeCard({ coffee, onPress }: CoffeeCardProps) {
  return (
    <TouchableOpacity style={styles.coffeeCard} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image 
          source={coffee.image}
          style={styles.coffeeImage}
          resizeMode="cover"
        />
        <View style={styles.ratingContainer}>
          <IconSymbol name="star.fill" size={16} color="#FBBE21" style={styles.starIcon} />
          <Text style={styles.ratingText}>{coffee.rating}</Text>
        </View>
      </View>
      <View style={styles.coffeeInfo}>
        <Text style={styles.coffeeName}>{coffee.name}</Text>
        <Text style={styles.coffeeDesc}>{coffee.description}</Text>
        <View style={styles.coffeeBottom}>
          <Text style={styles.coffeePrice}>$ {coffee.price.toFixed(2)}</Text>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  coffeeCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  coffeeImage: {
    width: '100%',
    height: 132,
    borderRadius: 12,
    marginBottom: 12,
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.24)',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  starIcon: {
    marginRight: 2,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  coffeeInfo: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2D2C',
    marginBottom: 4,
  },
  coffeeDesc: {
    fontSize: 12,
    color: '#9B9B9B',
    marginBottom: 12,
  },
  coffeeBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coffeePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  addButton: {
    width: 32,
    height: 32,
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
