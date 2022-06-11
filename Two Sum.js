function twoSum (nums, target){

    var twoSum = function(nums, target) {
        for (let i =0; i < nums.length; i++){
            let diff = target - nums[i] 
            let diffIndex = nums.indexOf(diff)
            if (diffIndex !== i && diffIndex !== -1){
               return [i,diffIndex]
            }
            }
          
        };
}

