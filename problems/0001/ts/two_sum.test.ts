import twoSum from './two_sum';

interface Params {
  nums: number[];
  target: number;
}

interface TestCase {
  params: Params;
  result: number[];
}

const testCases: TestCase[] = [
  {
    params: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    result: [0, 1],
  },
  {
    params: {
      nums: [3, 2, 4],
      target: 6,
    },
    result: [1, 2],
  },
  {
    params: {
      nums: [3, 3],
      target: 6,
    },
    result: [0, 1],
  },
  {
    params: {
      nums: [3, 2, 3],
      target: 6,
    },
    result: [0, 2],
  },
  {
    params: {
      nums: [-10, 7, 19, 15],
      target: 9,
    },
    result: [0, 2],
  },
];

describe('1. Two Sums', () => {
  for (const [index, testCase] of testCases.entries()) {
    test(`Test case ${index + 1}`, () => {
      const { params, result } = testCase;
      const output = twoSum(params.nums, params.target);

      try {
        expect(output).toStrictEqual(result);
      } catch (error) {
        console.log(
          'Input:',
          params,
          '\nOutput:',
          output,
          '\nExpected:',
          result
        );
        throw error;
      }
    });
  }
});
