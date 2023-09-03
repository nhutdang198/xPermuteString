/**
 * Generates all possible case permutations of a given string.
 *
 * @param key - The input string to be permuted.
 * @param start - The starting string (default is an empty string).
 * @returns An array of strings containing all case permutations of the input string.
 */
export function xPermuteString(key: string, start: string = ''): string[] {
  if (!key.length) {
    return []
  }

  function isSpecialCharacter(char: string): boolean {
    // Define the list of special characters you want to handle
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';

    return specialCharacters.includes(char);
  }

  /**
   * Recursive helper function to generate case permutations.
   *
   * @param result - An array to store the generated permutations.
   * @param key - The remaining characters to be permuted.
   * @param start - The current permutation being built.
   */
  function permuteString(
    result: string[],
    key: string,
    start: string = ""
  ): void {
    if (key.length === 0) {
      result.push(start);
      return;
    }

    const ch = key[0];
    key = key.substr(1);

    if (isSpecialCharacter(ch)) {
      permuteString(result, key, start + ch);
    } else {
      const chLower = ch.toLowerCase();
      const chUpper = ch.toUpperCase();
      permuteString(result, key, start + chLower);
      permuteString(result, key, start + chUpper);
    }
  };

  const permutedString: string[] = [];
  permuteString(permutedString, key, start);
  return permutedString;
}