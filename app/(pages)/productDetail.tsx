import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { coffeeData } from '@/data/coffeeData';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// Definisi warna
const COLORS = {
  background: '#FFFFFF',
  text: '#2F2D2C',
  textSecondary: '#9B9B9B',
  iconPrimary: '#C67C4E',
  iconSecondary: '#2F2D2C',
  border: '#F4F4F4',
  star: '#FBBE21',
  white: '#FFFFFF',
};

export default function ProductDetail() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [isFullDescription, setIsFullDescription] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');
  
  const coffee = coffeeData.find(c => c.id.toString() === params.id);

  if (!coffee) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
        <Text>Product not found</Text>
      </SafeAreaView>
    );
  }

  // Function to truncate description
  const getTruncatedDescription = (description: string, maxLines: number = 3) => {
    const words = description.split(' ');
    const truncatedWords = words.slice(0, maxLines * 5); // Approximate 5 words per line
    return truncatedWords.join(' ') + (words.length > truncatedWords.length ? '...' : '');
  };

  const sizeOptions = [
    { key: 'S', label: 'Small' },
    { key: 'M', label: 'Medium' },
    { key: 'L', label: 'Large' }
  ];

  const SizeCard = ({ size, label }: { size: 'S' | 'M' | 'L', label: string }) => (
    <TouchableOpacity 
      style={[
        styles.sizeCard, 
        selectedSize === size && styles.selectedSizeCard
      ]}
      onPress={() => setSelectedSize(size)}
    >
      <Text style={[
        styles.sizeCardText, 
        selectedSize === size && styles.selectedSizeCardText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.push('/(tabs)')} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color={COLORS.iconSecondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? COLORS.iconPrimary : COLORS.iconSecondary} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Image 
            source={coffee.image}
            style={styles.coffeeImage}
            resizeMode="cover"
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.coffeeName}>{coffee.name}</Text>
            <View style={styles.descriptionRow}>
              <Text style={styles.coffeeDesc}>{coffee.description}</Text>
              <View style={styles.iconContainer}>
                <View style={styles.iconWrapper}>
                  <Ionicons name="water" size={24} color={COLORS.iconPrimary} />
                </View>
                <View style={styles.iconWrapper}>
                  <Ionicons name="bicycle" size={24} color={COLORS.iconPrimary} />
                </View>
                <View style={styles.iconWrapper}>
                  <Ionicons name="shield-checkmark" size={24} color={COLORS.iconPrimary} />
                </View>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} color={COLORS.star} />
              <Text style={styles.ratingText}>
                <Text style={styles.ratingBold}>{coffee.rating}</Text> ({coffee.soldCount})
              </Text>
            </View>
            <View style={styles.divider} />
            
            <View style={styles.descriptionSection}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.longDescription}>
                {isFullDescription 
                  ? coffee.longDescription 
                  : getTruncatedDescription(coffee.longDescription || '')}
              </Text>
              {coffee.longDescription && coffee.longDescription.split(' ').length > 15 && (
                <TouchableOpacity 
                  onPress={() => setIsFullDescription(!isFullDescription)}
                  style={styles.readMoreButton}
                >
                  <Text style={styles.readMoreText}>
                    {isFullDescription ? 'SHOW LESS' : '...READ MORE'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.sizeSection}>
              <Text style={styles.sectionTitle}>Size</Text>
              <View style={styles.sizeContainer}>
                {sizeOptions.map(option => (
                  <SizeCard 
                    key={option.key} 
                    size={option.key as 'S' | 'M' | 'L'} 
                    label={option.label} 
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.priceSection}>
        <View style={styles.priceCard}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>$ {coffee.price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 100, // Add padding to bottom to ensure content is fully scrollable
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 10,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 8,
    backgroundColor: COLORS.border,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  favoriteButton: {
    padding: 8,
    backgroundColor: COLORS.border,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  coffeeImage: {
    width: '100%',
    marginTop: 10,
    height: 250,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: COLORS.border,
  },
  detailsContainer: {
    padding: 16,
  },
  coffeeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 2,
  },
  descriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  coffeeDesc: {
    fontSize: 14,
    color: COLORS.textSecondary,
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  iconWrapper: {
    backgroundColor: COLORS.border,
    borderRadius: 8,
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    color: COLORS.text,
    marginLeft: 8,
  },
  ratingBold: {
    fontWeight: 'bold',
  },
  divider: {
    height: 3,
    backgroundColor: COLORS.border,
    marginVertical: 16,
  },
  descriptionSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  longDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  readMoreButton: {
    marginTop: 8,
  },
  readMoreText: {
    color: COLORS.iconPrimary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  sizeSection: {
    marginTop: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  sizeCard: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedSizeCard: {
    borderColor: COLORS.iconPrimary,
    elevation: 4, // Slightly higher elevation when selected
  },
  sizeCardText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '500',
  },
  selectedSizeCardText: {
    color: COLORS.iconPrimary,
  },
  priceSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  priceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'column',
    marginLeft:20,
  },
  priceLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  buyNowButton: {
    backgroundColor: COLORS.iconPrimary,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 16,
    flex: 1,
    marginLeft: 70,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buyNowText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
