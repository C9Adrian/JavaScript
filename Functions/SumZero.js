/*
sumZero accepts a sorted array of integers. The function
returns the first pair where the sum is 0. 
*/

function sumZero(arr) {
    let left = 0; //a pointer that points to the first index
    let right = arr.length - 1; //a pointer that points to the last index

    //While the pointers haven't intersected
    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === 0)
        {
            return [arr[left], arr[right]];
        }
        // if the sum is greater that zero, move right pointer left
        else if(sum > 0){
            right--; 
        }
        //if the sum is less than zero, move left pointer right
        else {
            left++;
        }
    }
}