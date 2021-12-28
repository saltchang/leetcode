import lengthOfLongestSubstring from './longest_substring_without_repeating_characters';

interface Params {
  s: string;
}

interface TestCase {
  params: Params;
  result: number;
}

const testCases: TestCase[] = [
  {
    params: {
      s: 'abcabcbb',
    },
    result: 3,
  },
  {
    params: {
      s: 'pwwkew',
    },
    result: 3,
  },
  {
    params: {
      s: 'nintendo',
    },
    result: 5,
  },
  {
    params: {
      s: 'zelda',
    },
    result: 5,
  },
  {
    params: {
      s: 'hololivejpsaigkou',
    },
    result: 11,
  },
];

describe('3. Longest Substring Without Repeating Characters', () => {
  for (const [index, testCase] of testCases.entries()) {
    const title = `Test case ${index + 1}`;
    test(`${title}`, () => {
      const { params, result } = testCase;
      const output = lengthOfLongestSubstring(params.s);
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
