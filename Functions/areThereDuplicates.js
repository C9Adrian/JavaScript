function areThereDuplicates(...args) {

    let frequencyCounter1 = {};

    for(let key of args)
    {
        frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1; 
    }

    for(let key in frequencyCounter1)
    {
        if(frequencyCounter1[key] > 1)
        return true;
    }

    return false;



}