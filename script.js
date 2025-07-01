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