function cart(...num){
    return num;
}
console.log(cart(2,4,6,8))

const user ={
    uname:"Amisha",
    price:49
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.uname} and price is ${anyobject.price} `) 
}
handleobject(user)