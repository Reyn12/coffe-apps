# ☕ React Native Coffee Shop App

![Coffee Shop Banner](./assets/images/bannerPromo.png)

## 🚀 Fitur Utama

- 🏠 Home Screen dengan Dynamic Search & Filtering
- 🔍 Pencarian Real-time dengan Clear Button
- 📱 Custom Tab Navigation
- 🎨 Modern UI Design
- 📦 Dynamic Product Cards
- 🔄 Category Filtering

## 🛠️ Tech Stack

- **Framework:** React Native + Expo Router
- **UI Components:** Custom Components
- **Icons:** MaterialIcons
- **State Management:** React Hooks
- **Navigation:** Tab-based Navigation

## 📝 Step-by-Step Implementation

### 1. Setup Project & Dependencies
```bash
# Create new project with Expo Router
npx create-expo-app@latest --example tabs tabs-navigation

# Install dependencies
cd tabs-navigation
npm install react-native-safe-area-context
```

### 2. Struktur Folder
```
tabs-navigation/
├── app/
│   └── (tabs)/
│       ├── index.tsx        # Home Screen
│       ├── _layout.tsx      # Tab Navigation Layout
│       ├── cart.tsx         # Cart Screen
│       └── favorite.tsx     # Favorites Screen
├── components/
│   ├── CoffeeCard.tsx      # Product Card Component
│   ├── HapticTab.tsx       # Custom Tab Component
│   └── ui/
│       ├── IconSymbol.tsx  # Icon Component
│       └── TabBarBackground.tsx
├── data/
│   └── coffeeData.ts       # Product Data
└── assets/
    └── images/            # App Images
```

### 3. Implementasi Fitur

#### 🏠 Home Screen (index.tsx)
- Location Selector
- Search Bar dengan Clear Button
- Promo Banner
- Category Scrolling
- Dynamic Product Grid

#### 🎯 Tab Navigation (_layout.tsx)
- Custom Tab Bar Design
- Platform-specific Styling (Android/iOS)
- Icon Integration
- Smooth Transitions

#### 🔍 Search Functionality
- Real-time Search
- Clear Button Integration
- Category Filtering
- Empty State Handling

## 🎨 UI Components

### 1. Search Bar
```typescript
<View style={styles.searchBar}>
  <IconSymbol name="magnifyingglass" size={20} color="#989898" />
  <TextInput
    style={styles.searchInput}
    placeholder="Search Coffee"
    value={searchQuery}
    onChangeText={setSearchQuery}
  />
  {searchQuery.length > 0 && (
    <TouchableOpacity onPress={() => setSearchQuery('')}>
      <Text style={{ color: '#989898', fontSize: 15 }}>X</Text>
    </TouchableOpacity>
  )}
</View>
```

### 2. Custom Tab Bar
```typescript
<Tabs
  screenOptions={{
    tabBarStyle: Platform.select({
      android: {
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 80,
        borderRadius: 15,
        height: 70,
        elevation: 4,
      }
    })
  }}
>
```

## 🎯 State Management

```typescript
// Active Category State
const [activeCategory, setActiveCategory] = useState('All Coffee');

// Search Query State
const [searchQuery, setSearchQuery] = useState('');

// Filtered Products
const filteredCoffee = coffeeData.filter(coffee => 
  coffee.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

## 🚀 Running the App

```bash
# Development
npm start

# Clear Cache & Run
npx react-native start --reset-cache

# Android
npm run android

# iOS
npm run ios
```

## 📱 Screenshots

[Screenshots akan ditambahkan di sini]

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork it
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License.

---
Made with ❤️ using React Native & Expo Router
