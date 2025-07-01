console.log("script1 loaded..");

let marks = [87, 98, 90, 97, 93];

const mapResult = marks.map((item) => {
    console.log(item);
    return item + 2;
});

console.log(mapResult);

const filterResult = marks.filter((item) => {
    return item > 90;
});

console.log(filterResult);

const reduceResult = marks.reduce((acc, item) => {
    console.log(acc);
    console.log(item);
    return item + acc;
});

console.log(reduceResult);