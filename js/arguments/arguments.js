function setAlphabet() {
    console.log(arguments)
    let arr = []
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]
    }
    let goodArr = [...arguments]
    console.log(goodArr)
} 

setAlphabet('a', 'b', 'c', 'd');

