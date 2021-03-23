/*
this function accpects two arrays. the functin returns
true if every value in the array has its corresponding 
value squared in the second array. the frequency must
be the same. 
*/

function same(arr1, arr2){
    //if arrays are different length return false
    if(arr1.length !== arr2.length){
        return false;
    }

    //create two objects 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    //count the the number of times a value appears in the first array
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    //count the number of time a value appears in the second array 
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){

        //if the value squared in counter1 doesnt exist as a key in counter2 return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        //if the key value in counter1 doesn't match the key value in counter2 return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
