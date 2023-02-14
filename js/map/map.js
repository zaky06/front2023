// map
// не изменяет исходный масив
// в отличае от forEach может вернуть результат работы


let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = [];

newArr = arr.map((elem) => {
    //push не нужен, можно просто присвоить newArr = ...
    return elem *= elem
})

console.log(newArr)

// так же можно переписать массив 

arr = arr.map((elem) => {
    return elem *= elem
})

console.log(arr)

let responce = [
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
]

// вернул из массива объектов только то, что мне нужно

arr = responce.map((elem) => {
    return {
        name: elem.name,
        age: elem.age
    }
})

console.log(arr);