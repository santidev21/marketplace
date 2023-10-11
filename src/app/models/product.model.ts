export class Product {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';
  rating: {
    rate: number;
    count: number;
  } = {
    rate: 0,
    count: 0
  };
}