/**
 * 
 * @version 2.0.0
 * @author Siddharth
 * @license MIT
 * 
 * 
*/

class HTTPrequest {

    //Make a http GET request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    //Make a http POST request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    //Make a http PUT request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    // Make a http DELETE request
    delete(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleated...'))
            .then(err => reject(err));
        })
    }

}