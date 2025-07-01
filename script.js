console.log("scipt loaded");
console.log("this is testing");

//ES6+ Syntax
// function fun1() {
//     console.log("this is fun1");
// }

// fun1();

const fun2 = () => {
    console.log("this is arrow function");
};

fun2();

function funTest(fun) {
    fun();
    return fun;
}
//Arrow Functions
funTest(() => {
    console.log("This is fun body");
});

const sum = (a, b) => a + b;

console.log(sum(1, 2));

//Destructuring

const users = ["john", "peter", "kane", "david"];
const [name1, name2, name3, name4] = users;
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

const product = {
    productId: 45,
    productName: "Iphone",
    price: 82736,
    discount: 10
};

//console.log(product);
const { productId, productName, price, discount } = product;
console.log(productId);
console.log(productName);
console.log(price);
console.log(discount);

//Template Literals
let price1 = 292;
let discount1 = 10;
let para = `The price of the product is ${price1} and discount is ${discount1}`;
console.log(para);
