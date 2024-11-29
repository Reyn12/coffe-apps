import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, TextInput, Dimensions } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { CoffeeCard } from '@/components/CoffeeCard';
import { coffeeData } from '@/data/coffeeData';
import { useState, useRef } from 'react';
import { useRouter } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

// Definisi warna
const COLORS = {
  background: '#FFFFFF',
  cardBackground: '#1A1A1A',
  text: '#FFFFFF',
  textPrimary: '#2F2D2C',
  textSecondary: '#989898',
  searchBarBackground: '#2A2A2A',
  iconColor: '#C67C4E',
  borderColor: '#F4F4F4',
  categoryActiveBackground: '#C67C4E',
  categoryActiveText: '#FFFFFF',
  categoryInactiveBackground: '#F4F4F4',
  categoryInactiveText: '#2F2D2C',
};

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All Coffee');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const categories = [
    'All Coffee', 
    'Machiatto', 
    'Latte', 
    'Espresso',
    'Americano',
    'Thai Tea'
  ];

  const filteredCoffeeData = activeCategory === 'All Coffee' 
    ? coffeeData 
    : coffeeData.filter(coffee => coffee.category === activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView 
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.card}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Location</Text>
            <TouchableOpacity style={styles.locationSelector}>
              <Text style={styles.locationText}>Bandung, Jawa Barat</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <IconSymbol name="magnifyingglass" size={20} color={COLORS.textSecondary} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Coffee"
                placeholderTextColor={COLORS.textSecondary}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity 
                  onPress={() => setSearchQuery('')}
                >
                  <Text style={{ color: COLORS.textSecondary, fontSize: 15, marginRight: 5 }}>X</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <IconSymbol name="line.3.horizontal.decrease" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.promoContainer}>
            <TouchableOpacity onPress={() => console.log('Promo banner pressed')}>
              <Image 
                source={require('@/assets/images/bannerPromo2.png')}
                style={styles.promoImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryContent}
          >
            {categories.map((category) => (
              <TouchableOpacity 
                key={category}
                style={[
                  styles.categoryItem, 
                  activeCategory === category && styles.categoryItemActive
                ]}
                onPress={() => setActiveCategory(category)}
              >
                <Text 
                  style={[
                    styles.categoryText, 
                    activeCategory === category && styles.categoryTextActive
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {activeCategory === 'Americano' || activeCategory === 'Thai Tea' ? (
          <View style={styles.noContentContainer}>
            <Text style={styles.noContentTitle}>Coffee {activeCategory}</Text>
            <Text style={styles.noContentText}>Belum Tersedia...!!</Text>
          </View>
        ) : (
          <View style={styles.coffeeGrid}>
            {filteredCoffeeData
              .filter(coffee =>
                searchQuery === '' || 
                coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                coffee.description.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  coffee={coffee}
                  onPress={() => router.push(`/(pages)/productDetail?id=${coffee.id}`)}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    height: 320,
    width: '100%',
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    position: 'relative',
  },
  locationContainer: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 12,
  },
  locationLabel: {
    color: COLORS.text,
    opacity: 0.7,
    fontSize: 14,
    marginBottom: 4,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  dropdownIcon: {
    color: COLORS.text,
    fontSize: 12,
  },
  searchContainer: {
    marginTop: 40,
    marginLeft: 12,
    marginBottom:15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: COLORS.searchBarBackground,
    borderRadius: 15,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    marginLeft: 10,
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: COLORS.iconColor,
    width: 55,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  promoImage: {
    width: screenWidth - 32,
    height: 150,
    borderRadius: 16,
  },
  categoryContainer: {
    marginLeft: 16,
    marginRight: -50,
  },
  categoryScroll: {
    marginTop: 100,
  },
  categoryContent: {
    paddingRight: 66,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: COLORS.categoryInactiveBackground,
  },
  categoryItemActive: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: COLORS.categoryActiveBackground,
  },
  categoryText: {
    color: COLORS.categoryInactiveText,
    fontSize: 14,
  },
  categoryTextActive: {
    color: COLORS.categoryActiveText,
    fontSize: 14,
    fontWeight: 'bold',
  },
  coffeeGrid: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  noContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  noContentTitle: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  noContentText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});
