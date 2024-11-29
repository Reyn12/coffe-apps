export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: any;
  category: string;
}

export const coffeeData: Coffee[] = [
  {
    id: '1',
    name: 'Coffee Mocha',
    description: 'Deep Foam',
    price: 3.90,
    rating: 4.3,
    image: require('@/assets/images/caffeMocha.png'),
    category: 'Latte'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'With Chocolate',
    price: 3.35,
    rating: 4.8,
    image: require('@/assets/images/flatWhite.png'),
    category: 'Machiatto'
  },
  {
    id: '3',
    name: 'Latte Art',
    description: 'With Steamed Milk',
    price: 4.80,
    rating: 3.9,
    image: require('@/assets/images/mochaFussi.png'),
    category: 'Machiatto'
  },
  {
    id: '4',
    name: 'Americano',
    description: 'Hot Black Coffee',
    price: 4.53,
    rating: 4.8,
    image: require('@/assets/images/caffeMocha.png'),
    category: 'Machiatto'
  },
  {
    id: '5',
    name: 'Espresso',
    description: 'Strong Coffee Shot',
    price: 5.26,
    rating: 4.5,
    image: require('@/assets/images/flatWhite.png'),
    category: 'Latte'
  },
  {
    id: '6',
    name: 'Macchiato',
    description: 'Marked with Foam',
    price: 4.53,
    rating: 4.8,
    image: require('@/assets/images/mochaFussi.png'),
    category: 'Machiatto'
  },
];
