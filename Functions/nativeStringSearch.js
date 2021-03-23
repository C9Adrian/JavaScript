function nativeStringSearch(longStir, shortStir)
{
    let count = 0;
    for(let i = 0; i < longStir.length; i++)
    {
        for(let j = 0; i < shortStir.length; j++)
        {
            if(longStir[i+j] !== shortStir[j])
            {
                break;
            }
            if(j === shortStir -1)
            {
                count++;
            }
        }
    }

    return count;
}