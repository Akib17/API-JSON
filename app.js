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

// Get data, load data & show data on UI
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => data.json())
//     .then(users => {
//         jsonUsers(users)
//     })

// function jsonUsers(users) {
//     const lists = document.getElementById('lists')
//     // Map
//     // users.map(el => {
//     //     const li = document.createElement('li')
//     //     li.className = 'list-group-item'
//     //     li.innerHTML = el.name
//     //     lists.appendChild(li)
//     //     console.log(el.name)
//     // })
//     // ForEach
//     users.forEach(el => {
//         const li = document.createElement('li')
//         li.className = 'list-group-item'
//         li.innerHTML = el.name
//         lists.appendChild(li)
//     })
// }

// Post request
document.getElementById('submit').addEventListener('click', () => {
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const post = {
        title: title,
        body: body
    }
    postInfo(post)
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''
})

function postInfo(post) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => jsonUsers(json))
}

function jsonUsers(json) {
    const lists = document.getElementById('lists')
    const li = document.createElement('li')
    li.className = 'list-group-item mb-3'
    li.innerHTML = `<h4>${json.title}</h4>
    ${json.body}`
    if (json.title === '' || json.body === '') {
        alert('Please add title and body')
    } else {
        lists.appendChild(li)
    }
}