import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#C67C4E',
          tabBarInactiveTintColor: '#8D8D8D',
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => 
            focused ? (
              <View style={{ width: 20, height: 2, backgroundColor: '#C67C4E', marginTop: 8 }} />
            ) : null,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarItemStyle: {
            paddingHorizontal: 20,
            paddingTop: 10,
          },
          tabBarStyle: {
            display: keyboardVisible ? 'none' : 'flex',
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? insets.bottom + 20 : 20,
            left: 20,
            right: 20,
            marginHorizontal: 80,
            elevation: Platform.OS === 'android' ? 4 : 0,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            height: Platform.OS === 'android' ? 70 : 60,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 4,
            zIndex: 1000,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: 'center' }}>
                <IconSymbol size={25} name="house.fill" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: 'center' }}>
                <IconSymbol size={25} name="heart.fill" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: 'center' }}>
                <IconSymbol size={25} name="bag.fill" color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: 'center' }}>
                <IconSymbol size={25} name="person.fill" color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
