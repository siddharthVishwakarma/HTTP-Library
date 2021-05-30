/**
 * 
 * @version 2.0.0
 * @author Siddharth
 * @license MIT
 * 
 * 
*/

class HTTPrequest {

    //Make a http get request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }

    //Make a http post request
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
}