const user = {
    username: "Arpita", // Removed the leading spaces in the key
    price: 99,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome here`);
    }
}

user.welcomeMessage(); 

