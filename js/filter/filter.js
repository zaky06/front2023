
let response = [
    {
        'index': 0,
        'isActive': true,
        'age': 20,
        'name': 'Maxim',
    },
    {
        'index': 1,
        'isActive': true,
        'age': 30,
        'name': 'Vova',
    },
    {
        'index': 2,
        'isActive': false,
        'age': 60,
        'name': 'Vera',
    },
    {
        'index': 3,
        'isActive': true,
        'age': 14,
        'name': 'Nick',
    },
];

let arr = [1,2,3,4,5,6,7,8,9,10, -1,-2,-3,-4,-5];

let newArr = arr.filter((elem) => {
    return elem > 0;
})

console.log(newArr);

let newNewArr = arr.filter((elem) => {
    return elem < 0;
})

console.log(newNewArr);

let activeUsers = response.filter((elem) => {
    return elem.isActive
})

console.log(activeUsers)

let oldUsers = response.filter((elem) => {
    return elem.age > 25
})

console.log(oldUsers)