async function get() {
try{
 let ourData = await fetch("https://jsonplaceholder.com/todos")
 let theData = await ourData.json()
 console.log("Our data is ", theData)
}
catch(error){
    console.error("We have an error. The error is: ",error)
}
}

get()
console.log("hello")