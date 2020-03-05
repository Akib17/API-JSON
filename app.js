// const obj = {
//     id: 12,
//     name: 'Akib Ahmad',
//     location: 'Chittagong',
//     email: 'akibahmad17@gmail.com'
// }

// const objJSON = JSON.stringify(obj)

// const parseObj = JSON.parse(objJSON)
// console.log(objJSON);
// console.log(parseObj)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => data.json())
//     .then(users => {
//         jsonUsers(users)
//     })

// function jsonUsers(users) {
//     const lists = document.getElementById('lists')
//     users.map(el => {
//         const li = document.createElement('li')
//         li.className = 'list-group-item'
//         li.innerHTML = el.name
//         lists.appendChild(li)
//     })
// }