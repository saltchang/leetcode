import firstMissingPositive from './first_missing_positive';

interface Params {
  nums: number[];
}

interface TestCase {
  params: Params;
  result: number;
}

const testCases: TestCase[] = [
  // Test case 1
  {
    params: {
      nums: [1, 2, 0],
    },
    result: 3,
  },

  // Test case 2
  {
    params: {
      nums: [3, 4, -1, 1],
    },
    result: 2,
  },

  // Test case 3
  {
    params: {
      nums: [7, 8, 9, 11, 12],
    },
    result: 1,
  },

  // Test case 4
  {
    params: {
      nums: [-1, -3],
    },
    result: 1,
  },

  // Test case 5
  {
    params: {
      nums: [1, 1, 1, 1, 1, 1, 1],
    },
    result: 2,
  },
];

describe('5. Longest Palindromic Substring', () => {
  for (const [index, testCase] of testCases.entries()) {
    const title = `Test case ${index + 1}`;

    test(`${title}`, () => {
      const { params, result } = testCase;
      const output = firstMissingPositive(params.nums);

      try {
        expect(output).toBe(result);
      } catch (error) {
        console.log(
          title,
          '\nInput:',
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
