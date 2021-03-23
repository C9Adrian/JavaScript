function SelectionSort(arr) {
    let smallNum = 0
    let temp = 0;

    for(let i = 0 ; i < arr.length ; i++){
        smallNum = i;

        for(let j = i+1; j < arr.length; j++){
            if(arr[j]  < arr[smallNum]) smallNum =j;
        }

        if(smallNum !== i)
        {
            temp = arr[i];
            arr[i] = arr[smallNum];
            arr[smallNum] = temp;
        }
    
    }

    return arr;

}