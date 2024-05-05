const objArray = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 17
    },
    {
        name: 'Bob',
        age: 15
    },  
    {
        name: 'Alice',
        age: 18
    },

    
];
const arrayAgeOk = objArray.filter(function (obj) {
    return obj.age >= 18
})
console.log(arrayAgeOk)
const ageOkNames = arrayAgeOk.map(function (obj) {
    return obj.name
})
console.log(ageOkNames)