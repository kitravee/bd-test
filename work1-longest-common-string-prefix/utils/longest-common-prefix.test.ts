import { findLongestCommonPrefix } from "./longest-common-prefix";

export const  runTests = () => {
  interface TestCase {
      input: string[];
      expected: string;
  }

  let testCases: TestCase[] = [
      { input: ["flower", "flow", "flight"], expected: "fl" },
      { input: ["dog", "racecar", "car"], expected: "" },
      { input: ["interstellar", "internet", "interval"], expected: "inter" },
      { input: ["throne", "throne", "throne"], expected: "throne" },
      { input: ["apple", "ape", "april"], expected: "ap" },
      { input: ["", "b", "c"], expected: "" },
      { input: ["a"], expected: "a" }
  ];

  testCases.forEach(({ input, expected }, index) => {
      let result = findLongestCommonPrefix(input);
      console.log(`Test case ${index + 1}: ${result === expected ? "Passed" : "Failed"}`);
  });
}