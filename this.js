let phone = {
    brand: 'iphone',
    getBrand: function(){
        return this.brand;
    }
}


let samsung = {
    brand: 'samsung'
}

// Retorna a função getBrand(), porém define a variável samsung como a referência do "this" definido dentro do objeto phone
let brand = phone.getBrand.bind(samsung); 

console.log(brand()); // samsung