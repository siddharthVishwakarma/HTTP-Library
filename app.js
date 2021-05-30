const HTTP = new HTTPrequest;

// Making a GET request
// HTTP.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    Name: 'John Doe',
    Email: 'johndoe@gmail.com',
    Username: 'johndoe'
}

// Making a POST request   
// HTTP.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Making a PUT request
HTTP.put('https://jsonplaceholder.typicode.com/users/3', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
