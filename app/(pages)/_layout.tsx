import { Stack } from 'expo-router';

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen 
        name="productDetail"
        options={{
          presentation: 'card'
        }}
      />
    </Stack>
  );
}
