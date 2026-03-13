let products: Product[] = [];

class Product {
  name: string;
  category: string;
  price: number;
  description: string;
  img: string;
  constructor(
    name: string,
    category: string,
    price: number,
    description: string,
    img: string,
  ) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.img = img
  }
};

const product: Product = new Product('Salada Ravanello', 'meal', 50, 'qwerty', 'https://westcupgroup.com/wp-content/uploads/2020/06/1_4FzJWow3qJOV_O-3iKgBOw.jpeg');
products.push(product);

console.log(products);
