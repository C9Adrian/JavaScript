/*
Takes in two strings and checks whether the characters
in the first string form a subsequence of the characters
in the second string. In other words, the function should
check whether the first string appears somewhere in the 
second string, without their changing
*/

function isSubsequence(stir1, stir2){

    if(stir1.length > stir2.length) 
    {
        return false;
    }

    let left = 0;
    let right = 0;

    while(right < stir2.length)
    {
        if(stir1[left] === stir2[right])
        {
            left++;
            right++
            if(left === stir1.length - 1)
            return true;
        }

        else
        {
            right++;
        }
    }

    return false;
}