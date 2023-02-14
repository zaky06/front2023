// every переберет массив, если условие прошли все элементы то вернет true, но если 1 элемент не прошел то вернет false
// some переберет массив, если условие пройдет хотя бы 1 элемент то вернет true

let response = [
    {
        'index': 0,
        'isActive': true,
        'age': 20,
        'name': 'Maxim',
        'gender': 'male'
    },
    {
        'index': 1,
        'isActive': true,
        'age': 30,
        'name': 'Vova',
        'gender': 'male'
    },
    {
        'index': 2,
        'isActive': false,
        'age': 60,
        'name': 'Vera',
        'gender': 'female'
    },
    {
        'index': 3,
        'isActive': true,
        'age': 14,
        'name': 'Nick',
        'gender': 'male'
    },
];

let arr = [1,2,3,4,5,-1,-2,-3,-4,-5];

//проверка есть ли юзер девушка

let newArr = response.some((elem) => {
    return elem.gender === 'female'
})

console.log(newArr);