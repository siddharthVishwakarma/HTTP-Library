/**
 * 
 * @version 2.0.0
 * @author Siddharth
 * @license MIT
 * 
 * 
*/

class HTTPrequest {

    //Make a get request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        })
    }
}