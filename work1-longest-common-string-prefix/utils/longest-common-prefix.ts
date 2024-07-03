export const findShortestString = (strs: string[]) => {
  return strs.reduce((a: string, b: string) => (a.length <= b.length ? a : b));
};

export const findLongestCommonPrefix = (strs: string[]) => {
  if (strs.length === 0) return "";

  const shortestStr = findShortestString(strs);

  for (let i = 0; i < shortestStr.length; i++) {
    let char = shortestStr[i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        const commonPrefix = shortestStr.slice(0, i);
        return commonPrefix;
      }
    }
  }

  return shortestStr;
};


