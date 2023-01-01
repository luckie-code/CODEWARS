//in this simple assignment you are given a number and have to make it negative But maybe the number is already negative
function makeNegative(num){
    return -Math.abs(num)
}
console.log(-5);

function number(n){
    if (num > 0){
        return -num;
    }else {
        return num;
    }
}

//you get an array of numbers, return the sum of all the positives ones
//example [1,-4, 7, 12] => i + 7 + 12 = 20
//note: if there s nothing to sum, the sum is default to 0
//codewars solution(need to understand arrow functions)
function positiveSum(arr){
    return arr.reduce((a,b)=> a +(b > 0 ? b : 0), 0)
}

//my solution--sum the ele
function positiveSum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            total += arr[i];
        }
    }
    return total;
}

console.log(positiveSum([1,2,3,4]))

//write a function that accepts an integer n and a string s as parameters, and returns astringof s repeatedly exactly as times
function repeatString(string, times){
    if (times > 0){
        return string.repeat(times)
    }else {
    
        return "";
}
}

console.log(repeatString("abc", 3));


//using loop 
function repeatsString(n, s){
let str = '';
for(let i = 0; i < n; i++){
    str+=s

return str
}
}

//complete the square sum function so that it squares each number passed into it and then sums the results together

function squareSum(num){
    let total = 0;
    for(let i=0; i < num.length; i++){
        total += num[i] ** 2;
    }
    return total;
}
console.log(squareSum([1,2,2]))