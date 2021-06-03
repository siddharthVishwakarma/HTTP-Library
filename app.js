const HTTP = new HTTPrequest;

const data = {
    Name: 'John Doe',
    Email: 'johndoe@gmail.com',
    Username: 'johndoe'
}

// Making a GET request (Get Users)
// HTTP.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Making a POST request (Create User)
// HTTP.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Making a PUT request (Update User)
// HTTP.put('https://jsonplaceholder.typicode.com/users/3', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Making a DELETE request (Delete User)
HTTP.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))
    .catch(err => console.log(err));
