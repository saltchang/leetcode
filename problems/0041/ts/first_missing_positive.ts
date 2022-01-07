const firstMissingPositive = (nums: number[]): number => {
  let i = 0;
  const len = nums.length;

  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] - 1 < len && nums[i] !== nums[nums[i] - 1]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  for (const [index, num] of nums.entries()) {
    if (num !== index + 1) return index + 1;
  }

  return len + 1;
};

export default firstMissingPositive;
