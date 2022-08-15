var user = {username:"bob01", password:"12345"};

function login(username, password){
    if (username !== user.username){
        throw new Error ("invalid username")
    } else if (password !== user.password){
        throw new Error ("invalid password")
    } else {
        console.log("Login Sucessful")
    }
}

try{
    login("Joe", "12345")
} catch(err){
    console.log(err.message)
}

try{
    login("bob01", "hammertime")
} catch(err){
    console.log(err.message)
}

try{
    login("bob01", "12345")
} catch (err){
    console.log(err)
}