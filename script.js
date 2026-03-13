var products = [];
var Product = /** @class */ (function () {
    function Product(name, category, price, description, img) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.img = img;
    }
    return Product;
}());
;
var product = new Product('Salada Ravanello', 'meal', 50, 'qwerty', 'https://westcupgroup.com/wp-content/uploads/2020/06/1_4FzJWow3qJOV_O-3iKgBOw.jpeg');
products.push(product);
console.log(products);
