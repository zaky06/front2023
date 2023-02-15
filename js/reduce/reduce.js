// reduce применяется восновном для свертки массива (получить с массива что-то одно)

let arr = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3];
let flattened = [[0,1], [2,3], [4,5]];

// получили сумму всех  чисел
// arr = arr.reduce((sum, elem) => {
//     return sum += elem
// })

// console.log(arr);

// console.log(arr.concat([1, 2]));

let friends = [
    {name: "Anna", books: ['Bible', 'harry potter']},
    {name: "Bob", books: ['war and peace', 'romeo and juilet']},
    {name: "Kate", books: ['the lord of rings', 'the shining']},
]

let allBooks = friends.reduce((sum, elem) => {
    // return sum.concat(elem.books)
    return [...sum, ...elem.books]
}, [])

console.log(allBooks);
