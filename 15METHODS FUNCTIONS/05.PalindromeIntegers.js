function palindrome(input) {
    for (let nums of input) {
        console.log(isPalindrome(nums));
    }

    function isPalindrome(num) {
        let reversedNum = '';
        let numAsStr = num.toString();

        for (let i = numAsStr.length - 1 ; i >= 0; i--) {
            reversedNum += numAsStr[i];            
        }

        return numAsStr === reversedNum;
    }
}
palindrome([123,323,421,121]);