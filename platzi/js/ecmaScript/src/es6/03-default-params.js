//antes de ms6
function newUser(name, age, country) {
    var name = name || "Alan";
    var age = age || 34;
    var country = country || 'Chile';
    console.log(name, age, country);
}

newUser()
newUser("Pascal", 10, 'Francia')

//con es6
function newUser2(name = 'Alan', age = 34, country = "Chile") {
    var name = name;
    var age = age;
    var country = country ;
    console.log(name, age, country);
}

newUser2()
newUser2("Pascal", 10, 'Francia')