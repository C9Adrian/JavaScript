function validAnagram(stir1, stir2) {

    if(stir1.length != stir2.length)
    return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let charator of stir1)
    {
        frequencyCounter1[charator] = (frequencyCounter1[charator] || 0) + 1;
    }

    for(let charator of stir2)
    {
        frequencyCounter2[charator] = (frequencyCounter2[charator] || 0) + 1;
    }

    //console.log(frequencyCounter1);
    //console.log(frequencyCounter2);

    for(let key in frequencyCounter1)
    {
        if(!(key in frequencyCounter2))
        return false;

        if(frequencyCounter1[key] !== frequencyCounter2[key])
        return false;
    }

    return true; 
}

validAnagram('hello', 'olhel');
validAnagram('', '');//true
validAnagram('aaz', 'zza'); //false
validAnagram('anagram', 'nagaram'); //true
validAnagram("rat", "car"); //false
validAnagram("qwerty", "qeywrt"); //true
validAnagram("awesome", "awesom"); //false