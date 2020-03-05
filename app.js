const obj = {
    id: 12,
    name: 'Akib Ahmad',
    location: 'Chittagong',
    email: 'akibahmad17@gmail.com'
}

const objJSON = JSON.stringify(obj)

const parseObj = JSON.parse(objJSON)
console.log(objJSON);
console.log(parseObj)