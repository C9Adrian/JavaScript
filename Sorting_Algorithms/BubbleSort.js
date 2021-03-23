function BubbleSort(arr){

    let temp = 0;
    let swap = false;

    for(let i = arr.length; i > 0; i--)
    {
        for(let j = 0; j < i -1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr [j+1];
                arr[j+1] = temp;

                swap = true;
            }
        }

        if(swap === true) swap = false;
        else break;
    }

    return arr;
}