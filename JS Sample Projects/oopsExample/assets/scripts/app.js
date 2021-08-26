const pageHook = document.getElementById("app");

class AttributeElement{
    constructor(name,value){
        this.name=name;
        this.value =value;
    }
}

class Component{
  #hook;
    set renderHook(value){
        this.#hook = document.getElementById(value) ;
    }

    constructor(){  }

    createRootElement(tag,className,attributes){
        let element = document.createElement(tag);
        if(className){
            element.className = className;
        }
        if(attributes && attributes.length > 0){
            attributes.forEach(e => {
                element.setAttribute(e.name , e.value);
            });
        }
         this.rootElement = element;
      }

      render(){
          if(this.#hook){
              this.#hook.appendChild(this.rootElement);
          }
      }
}

class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart extends Component{
  items = [];

  constructor() {
     super();
     this.renderHook = 'app';
     this.render();
}

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}
    </h2>`;
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

  orderNow = ()=>{
    console.log("--Order Details--");
    console.log(this.totalAmount);
  }

  render() {
     this.createRootElement('section','cart');
     this.rootElement.innerHTML = `
                  <h2>Total: \$${0}</h2>
                  <button>Order Now!</butto>`;
    this.totalOutput =  this.rootElement.querySelector("h2");
    let orderNowButt = this.rootElement.querySelector("button");
    orderNowButt.addEventListener('click', this.orderNow);
    super.render();
  }
}

class ProductItem extends Component {
  constructor(product,parentId) {
    super();
    this.product = product;
    this.renderHook=parentId;
    this.render();
  }

  addToCart() {
    App.shop.addProduct(this.product);
  }

  render() {
    this.createRootElement("li","product-item");
    this.rootElement.innerHTML = `
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
    var addTocartButton = this.rootElement.querySelector("button");
    addTocartButton.addEventListener("click", this.addToCart.bind(this));
    super.render();
  }
}

class ProductList extends Component {

    constructor(){
        super();
        this.renderHook= "app";
        this.render();
    }
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
    this.createRootElement('ul','product-list',[new AttributeElement('id' , "list-Products")]) //document.createElement("ul");
    super.render();

    for (let item of this.products) {
         new ProductItem(item, 'list-Products');
    }
   
  }
}

class Shop {
    
  static cart;

  constructor() {
    this.cart = new ShoppingCart();
    new ProductList();
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
