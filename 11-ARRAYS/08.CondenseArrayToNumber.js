function condense(nums) {
    while (nums.length > 1) {
        let condensed = new Array(nums.length-1);
        for (let i = 0; i < condensed.length; i++) {
            condensed[i] = nums[i] + nums[i + 1];
        }
        nums = condensed;
    }
    console.log(`${nums}`);
}
condense([2,10,3]);