const user={
    username:"Amisha",
    price:999,

    welcomeMessage: function(){
        console.log(`${ this.username}, welcome to website`);
    }
}
user.welcomeMessage()
user.username="Ami"
user.welcomeMessage()
