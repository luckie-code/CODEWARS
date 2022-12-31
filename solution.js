//we need a function that can transform a number(integer) into a string 
function number_to_string(num){
 return   num.to_S()

}

//create a function that takes an integer as an argument and returns "Even" for even numbers or "odd"for odd numbers

function evenOrOdd(numbers) {
    if(numbers % 2 == 0){
        return ("even")
    }else {
        return ("odd")
    }
}
console.log(evenOrOdd(2));

// or
function evenOrOdd(number){//use ternary Operator
    return number % 2 ? "odd" : "even"
}

//given an integer or a floating point number find its opposite
//floating-point number is a positive or a negative whole number with a decimal point(-102.45)
function opposite(num){
    return (-num)
} 

function opposite(number) {
    return number > 0 ? -number : Math.abs(number)
}
//complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false
function booolean(number){
    if (number) {
        return 'Yes';
    } else {
        return 'No';
    }
}

// complete the solution so that it reverses the string passed into it
function reverseString(str){
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

function reverseString(str) {
    let n = " "
    for(let i of str){
      n = i + n; 
    }
    return n
    }
console.log(reverseString("striving")) 

