// forEach
// не изменяет исходный масив
//function (elem, index, array) {} 

let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = [];
let counter = 0;

arr.forEach((elem) => {
    counter += elem
})

console.log(counter);