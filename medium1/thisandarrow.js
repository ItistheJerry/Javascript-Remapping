console.log("\n++++++++++++********* This +++++++*********\n");

// tells us about current context

const user = {
    username: "Jerry",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to The future, For which all generations have been waiting for`)
    }
}

user.welcomeMessage();
user.username = "Samyak";
user.welcomeMessage();



console.log("\n++++++++++++********* Arrow +++++++*********\n");
 
