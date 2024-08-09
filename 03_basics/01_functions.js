// function addTwoNumbers (number1, number2){
//     let result = number1+number2
//     return result
// }
// const result = addTwoNumbers(3,4)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
