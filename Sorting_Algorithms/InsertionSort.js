function InsertionSort(arr)
{
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j> 0 ; j--)
        {
            if(arr[j-1] > arr[j])
            {
                let temp = arr[j];
                arr[j] = arr [j - 1];
                arr[j-1] = temp; 
            }
        }


    }

    return arr;
}