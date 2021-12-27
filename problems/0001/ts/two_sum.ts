const twoSum = (nums: number[], target: number): number[] => {
  const pair = new Map<number, number>();

  for (const [index, value] of nums.entries()) {
    if (pair.get(value) !== undefined) {
      return [pair.get(value)!, index];
    }
    pair.set(target - value, index);
  }

  return [];
};

export default twoSum;
