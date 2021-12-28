const lengthOfLongestSubstring = (s: string): number => {
  const sub: string[] = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const repeatedIndex = sub.indexOf(s[i]);
    if (repeatedIndex > -1) {
      sub.splice(0, repeatedIndex + 1);
    }
    sub.push(s[i]);
    if (sub.length > max) max = sub.length;
  }

  return max;
};

export default lengthOfLongestSubstring;
