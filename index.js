function myEach(collection, callback) {
    // if(typeof(collection) === 'object') {
    //     const objArray = myValues(collection)
    //     for(let i = 0; i < mySize(collection); i++){
    //         callback(objArray[i])
    //     } return collection;
    // }
    const newCollection = objHandler(collection)
    for(let i = 0; i < mySize(newCollection); i++){
        callback(newCollection[i])
    } return collection;
}

function objHandler(collection){
    if(typeof(collection) === 'object') {
        const objArray = myValues(collection)
        return objArray
    } return collection
}   

function myMap(collection, callback) {
    let newArray = []
    if(typeof(collection) === 'object') {
        const objArray = myValues(collection)
        for(let i = 0; i < mySize(collection); i++){
            newArray.push(callback(objArray[i]))
        }
    } else {
        for(let i = 0; i < mySize(collection); i++){
            newArray.push(callback(collection[i]))
        }
    } return newArray;
}

function myReduce(collection, callback, acc) {
    if(typeof(acc) !== 'number'){
        if(typeof(collection) === 'object') {
            const objArray = myValues(collection)
            let acc = objArray[0]
            for(let i = 1; i < mySize(collection); i++){
                acc = callback(acc, objArray[i], collection)
            } return acc;
        }
        let acc = collection[0]
        for(let i = 1; i < mySize(collection); i++){
            acc = callback(acc, collection[i], collection)
        } return acc;
    }
    if(typeof(collection) === 'object') {
        const objArray = myValues(collection)
        for(let i = 0; i < mySize(collection); i++){
            acc = callback(acc, objArray[i], collection)
        } return acc;
    }
    for(let i = 0; i < mySize(collection); i++){
        acc = callback(acc, collection[i], collection)
    } return acc;
}

function myFind(collection, predicate) {
    if(typeof(collection) === 'object') {
        const objArray = myValues(collection)
        for(let i = 0; i < mySize(collection); i++) {
            if(predicate(objArray[i]) === true) {
                return objArray[i];
            }
        }
    }
    for(let i = 0; i < mySize(collection); i++) {
        if(predicate(collection[i]) === true) {
            return collection[i];
        }
    }
}

function myFilter(collection, predicate) {
    let filter = []
    if(typeof(collection) === 'object') {
        const objArray = myValues(collection)
        for(let i = 0; i < mySize(collection); i++) {
            if(predicate(objArray[i]) === true) {
                filter.push(objArray[i])
            }
        } return filter;
    }
    for(let i = 0; i < mySize(collection); i++) {
        if(predicate(collection[i]) === true) {
            filter.push(collection[i])
        }
    } return filter;
}

function mySize(collection) {
    let size = 0;
    let i = 0;
    if(typeof(collection) === 'object') {
        const objArray = myKeys(collection)
        while(typeof(objArray[i]) !== 'undefined'){
            size = size + 1
            i++
        } return size
    }
    while(typeof(collection[i]) !== 'undefined'){
        size = size + 1
        i++
    } return size
}

function myFirst(array, n = 0) {
    if(n === 0){
        return array[0]
    } else {
        let newArray = []
        for(let i = 0; i < n; i++){
            newArray.push(array[i])
        } return newArray;
    }
}

function myLast(array, n = 0) {
    if(n === 0){
        return array[mySize(array) - 1]
    } else {
        let newArray = []
        for(let i = 0; i < n; i++){
            newArray.push(array[(mySize(array) - n) + i])
        } return newArray;
    }
}

function myKeys(object) {
    let keyArray = []
    for(const key in object){
        keyArray.push(key)
    } return keyArray;
}

function myValues(object) {
    let valueArray = []
    for(const key in object){
        valueArray.push(object[key])
    } return valueArray
}