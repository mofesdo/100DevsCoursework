//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 
function reverseParty(party){
for(let i = party.length -1; i >= 0; i--){
    console.log(party[i])
}
}

reverseParty(["pikachu", "rowlet", "dialga", "murkrow", "charmander", "rayquaza"])
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element 
//in a is strictly greater than the sum of the cubes of each element in b.
function biggerthan(a, b){
    let sumA = 0;
    let sumB = 0;

    for(let i = 0; i < a.length; i++){
        sumA += a[i];
    }
    for(let i = 0; i < b.length; i++){
        sumB += b[i];
    }

    if(sumA > sumB){
        return true;
    }
    else{
        return false;
    }
}

let a = [2, 3, 4, 5, 100]
let b = [1, 3, 4, 5, 8]

console.log(biggerthan(a, b))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.