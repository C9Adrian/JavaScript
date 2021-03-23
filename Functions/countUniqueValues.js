/*
countUniqueValues counts the unique values an array
array is assumed to be sorted
*/
function countUniqueValues(arr) {

    let left = 0;

    if(arr.length === 0)
    {
        return 0;
    }

   for(let right = 1; right < arr.length; right++)
   {
       if(arr[left] !== arr[right])
       {
           left++;
           arr[left] = arr[right];
       }
   }

   return left + 1; 
}