
function pivot(arr, start = 0, end = arr.length+1){ 
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let piv = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i <= end; i++)
    {
        if(piv > arr[i])
        {
            swapIdx++;
            swap(arr,swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
} 

function quicksort(arr, left = 0, right = arr.length - 1) {
    if(left < right){

        let pivotIndex = pivot(arr, left, right);
        //left side of array
        quicksort(arr,left, pivotIndex -1);
        //right side of array
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}