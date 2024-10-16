import data from '../assets/js/data.json';

const getData = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}
const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find(element => element.id === id);
        if(item){
            resolve(item)
        }else{
            reject({
                error: 'Item not found'
            })
        }
            
    })
}

export {getData, getProductById}