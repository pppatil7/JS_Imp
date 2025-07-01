console.log("script2 loaded..");

let jsonData = '{"name":"john","age":21}';



try {
    const ob = JSON.parse(jsonData);
    console.log(ob);
    console.log(ob.name);
    console.log(ob.age);
} catch (error) {
    console.log("error occured");
    console.log(error);
} finally {
    console.log("thankyou");
}

console.log("converted");



