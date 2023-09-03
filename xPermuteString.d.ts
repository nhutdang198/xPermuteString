// xPermuteString.d.ts

declare module 'x-permute-string' {
  /**
   * Generates all possible case permutations of a given string, including special characters.
   *
   * @param key - The input string to be permuted.
   * @returns An array of strings containing all case permutations of the input string.
   */
  export function xPermuteString(key: string): string[];
}
