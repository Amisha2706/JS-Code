
// // const symb= Symbol("key")
// // const user={
// //     id: "Amisha",
// //     age: 18,
// //     location: "Bihar",
// //     email:"singhamisha@gmail.com",
// //     isLoggedIn: false,
// //     lastLoginDays: ["Monday","Saturday"],
// // [symb]: "New Key"

// // }
// // console.log(user[symb])
// // console.log(user["email"])
// // console.log(user.email)

// // user.email="Ami"
// // //Object.freeze(user)
// // user.email="ghghjbh"
// // console.log(user)

// // user.greeting=function(){
// //     console.log("hello there");
// // }
// // console.log(user.greeting())

// // user.greetingtwo=function(){
// //     console.log(`hii there ,${this.id}`);
// // }
// // console.log(user.greetingtwo());


// // Singleton Object

// const obj = {}
// obj.name="Amisha"
// obj.id=1001
// console.log(obj)


// const nested ={
//     email:" singh@gmail.com",

//     fullname:{
// lastname:{
//     fName:"amisha",
//     Lname:"Singh"
// }
//     }
// }
// console.log(nested.fullname)
// const obj1={
//     1:"a",
//     2:"b"
// }

// const obj2={
//     3:"a",
//     4:"b"
// }
// const obj3= Object.assign(obj1,obj2)
// console.log(obj3)
// const obj4= Object.assign({},obj1,obj2)
// console.log(obj4)

// const obj5={...obj1, ...obj2}
// console.log(obj5)

// const users={
//     id : 1,
//     email: "@kj"
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.hasOwnProperty('name'))

const course ={
    sub :"Java",
    id : 101
}
const{sub:cr,id} = course
console.log(cr,id)