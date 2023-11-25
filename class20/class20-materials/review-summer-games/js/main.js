//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multEach(arr){
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        product = product * arr[i]
    }
    alert(product)
}

let nums = [2, 3, 10]
multEach(nums)