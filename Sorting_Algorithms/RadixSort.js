function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if(num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        max = Math.max(max, digitCount(arr[i]));
    }

    return max;
}

function radixSort(arr){
    let end = mostDigits(arr);
    for(let i = 0; i < end; i++)
    {
        let bucket = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++)
        {
            let digit = getDigit(arr[j], i);
            bucket[digit].push(arr[j]);    
        }
        arr=[].concat(...bucket);
    }
}