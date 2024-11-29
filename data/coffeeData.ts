export interface Coffee {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  rating: number;
  soldCount: number;
  image: any;
  category: string;
}

export const coffeeData: Coffee[] = [
  {
    id: '1',
    name: 'Coffee Mocha',
    description: 'Deep Foam',
    longDescription: 'Coffee Mocha is a delightful blend of espresso, steamed milk, and rich chocolate syrup. This indulgent beverage combines the bold flavor of coffee with the smooth, sweet notes of chocolate, creating a luxurious and comforting drink that satisfies both coffee and chocolate lovers.',
    price: 3.90,
    rating: 4.3,
    soldCount: 230,
    image: require('@/assets/images/caffeMocha.png'),
    category: 'Latte'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'With Chocolate',
    longDescription: 'A classic Italian coffee drink, Cappuccino is made with equal parts espresso, steamed milk, and milk foam. Traditionally served in a 150-180 ml cup, it features a perfect balance of rich espresso and creamy milk, topped with a light, airy foam that creates a smooth and velvety texture.',
    price: 3.35,
    rating: 4.8,
    soldCount: 345,
    image: require('@/assets/images/flatWhite.png'),
    category: 'Machiatto'
  },
  {
    id: '3',
    name: 'Latte Art',
    description: 'With Steamed Milk',
    longDescription: 'Latte Art is not just a coffee, but a visual and gustatory experience. Made with espresso and steamed milk, it features intricate designs created by skillfully pouring milk into the coffee. The result is a beautiful, Instagram-worthy beverage that combines the rich taste of espresso with the smooth, creamy texture of perfectly steamed milk.',
    price: 4.80,
    rating: 3.9,
    soldCount: 178,
    image: require('@/assets/images/mochaFussi.png'),
    category: 'Machiatto'
  },
  {
    id: '4',
    name: 'Americano',
    description: 'Hot Black Coffee',
    longDescription: 'Americano is a simple yet bold coffee drink made by diluting a shot of espresso with hot water. Originating from American soldiers during World War II who found espresso too strong, this drink offers a milder, more approachable version of espresso while maintaining its robust coffee flavor and aroma.',
    price: 4.53,
    rating: 4.8,
    soldCount: 267,
    image: require('@/assets/images/caffeMocha.png'),
    category: 'Machiatto'
  },
  {
    id: '5',
    name: 'Espresso',
    description: 'Strong Coffee Shot',
    longDescription: 'Espresso is the purest form of coffee, brewed by forcing hot water under high pressure through finely-ground coffee beans. Served in small shots, it is characterized by its intense flavor, rich crema, and high concentration of caffeine. A true testament to the art of coffee making, espresso forms the base for many popular coffee drinks.',
    price: 2.50,
    rating: 4.5,
    soldCount: 412,
    image: require('@/assets/images/mochaFussi.png'),
    category: 'Espresso'
  },
  {
    id: '6',
    name: 'Macchiato',
    description: 'Marked with Foam',
    longDescription: 'Macchiato is a coffee drink made by adding steamed milk to a shot of espresso, creating a creamy and velvety coffee with a smooth, airy foam that adds a unique texture to the drink.',
    price: 4.53,
    rating: 4.8,
    soldCount: 0,
    image: require('@/assets/images/mochaFussi.png'),
    category: 'Machiatto'
  },
];
