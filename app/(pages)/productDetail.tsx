import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { coffeeData } from '@/data/coffeeData';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function ProductDetail() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [isFullDescription, setIsFullDescription] = useState(false);
  
  const coffee = coffeeData.find(c => c.id.toString() === params.id);

  if (!coffee) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.push('/(tabs)')} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#2F2D2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#2F2D2C" />
        </TouchableOpacity>
      </View>

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
                <Ionicons name="water" size={24} color="#C67C4E" />
              </View>
              <View style={styles.iconWrapper}>
                <Ionicons name="bicycle" size={24} color="#C67C4E" />
              </View>
              <View style={styles.iconWrapper}>
                <Ionicons name="shield-checkmark" size={24} color="#C67C4E" />
              </View>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color="#FBBE21" />
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
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
  },
  backButton: {
    padding: 8,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  favoriteButton: {
    padding: 8,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  coffeeImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
  },
  detailsContainer: {
    padding: 16,
  },
  coffeeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F2D2C',
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
    color: '#9B9B9B',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  iconWrapper: {
    backgroundColor: '#F4F4F4',
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
    color: '#2F2D2C',
    marginLeft: 8,
  },
  ratingBold: {
    fontWeight: 'bold',
  },
  divider: {
    height: 3,
    backgroundColor: '#EAEAEA',
    marginVertical: 16,
  },
  descriptionSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2D2C',
    marginBottom: 8,
  },
  longDescription: {
    fontSize: 14,
    color: '#9B9B9B',
    lineHeight: 22,
    marginBottom: 8,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#C67C4E',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
