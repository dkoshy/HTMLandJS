const renderHook = document.getElementById("app");

class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  constructor() {}

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    let sum = this.items.reduce((p, n) => p + n.price, 0);
    return sum;
  }

  addProductToCart(product) {
    let updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartSection = document.createElement("section");
    cartSection.innerHTML = `
                  <h2>Total: \$${0}</h2>
                  <button>Order Now!</butto>`;
    cartSection.className = "cart";
    this.totalOutput = cartSection.querySelector("h2");
    return cartSection;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.shop.addProduct(this.product);
  }

  render() {
    const prodItem = document.createElement("li");
    prodItem.className = "product-item";
    prodItem.innerHTML = `
         <div> 
         <img src=${this.product.imageUrl} alt=${this.product.title}>
             <div class='product-item__content'>
                 <h2>${this.product.title}</h2>
                 <h3>\$${this.product.price}</h3>
                 <p>${this.product.description}</p>
                 <button>Add to Cart</button>
         </div>
       </div>
        `;
    var addTocartButton = prodItem.querySelector("button");
    addTocartButton.addEventListener("click", this.addToCart.bind(this));
    return prodItem;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "A soft pillow!",
      20.5
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      80.5
    ),
  ];

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (let item of this.products) {
      const prodItem = new ProductItem(item);
      const prodEln = prodItem.render();
      prodList.appendChild(prodEln);
    }
    return prodList;
  }
}

class Shop {
  static cart;
  static productList;

  constructor() {
    this.cart = new ShoppingCart();
    let shoppingCartItems = this.cart.render();
    this.productList = new ProductList();
    let productListItems = this.productList.render();

    renderHook.appendChild(shoppingCartItems);
    renderHook.appendChild(productListItems);
  }

  addProduct(product) {
    this.cart.addProductToCart(product);
  }
}

class App {
  static shop;
  static init() {
    this.shop = new Shop();
  }
}

App.init();
