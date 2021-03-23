/*
Given a sorted array of integers and a target average
determine if there is a pair of values in the array
where the average of the pair equals the target
average
*/

function averagePair(arr, avr){

    if(arr.length === 0)
    return false; 
    
    let left = 0;
    let right = arr.length - 1;

    let sum = 0;

    while(left < right)
    {
        sum = (arr[left] + arr[right]) / 2;
        if(sum === avr)
        return true;

        else if(sum > avr)
        right--;

        else
        left++
    }

    return false

}