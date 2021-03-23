/*
max subArraySum accepts an array of integers and a number called
n. The function calculates the max sum of n consecutive
elements in the array
*/
function maxSubArraySum(arr, num) {
    let MaxSum = 0;
    let tempSum = 0;

    //if num is larger than array return Null
    if(num > arr.length)
    {
        return null;
    }

    // get the sum from the first n numbers in the array
    for(let i = 0; i < num; i++)
    {
        MaxSum = arr[i];
    }

    tempSum = MaxSum;
    
    //Find the next sum by adding the next element in array
    //and subtracting the first element in the sub array
    for(let i = num; i < arr.length; i++)
    {
        tempSum = MaxSum - arr[i - num] + arr[i];
        if(tempSum > MaxSum) {
            MaxSum = tempSum;
        }
    }

    return MaxSum;

}