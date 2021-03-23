function sameFrequency(num1, num2)
{

    let tempnum1 = num1.toString();
    let tempnum2 = num2.toString();

    if(tempnum1.length !== tempnum2.length)
    {
        return false;
    }

    let frequecyCounter1 = {};
    let frequecyCounter2 = {};

    for(let key of tempnum1)
    {
        frequecyCounter1[key] = (frequecyCounter1[key] || 0) + 1;
    }

    for(let key of tempnum2)
    {
        frequecyCounter2[key] = (frequecyCounter2[key] || 0) + 1;
    }

    for(let key in frequecyCounter1)
    {
        if(!(key in frequecyCounter2))
        {
            return false;
        }

        if(frequecyCounter1[key] !== frequecyCounter2[key])
        {
            return false;
        }
    }

    return true;

}

sameFrequency(182, 281);
sameFrequency(34, 14);