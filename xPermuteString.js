"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xPermuteString = void 0;
/**
 * Generates all possible case permutations of a given string.
 *
 * @param key - The input string to be permuted.
 * @param start - The starting string (default is an empty string).
 * @returns An array of strings containing all case permutations of the input string.
 */
function xPermuteString(key, start) {
    if (start === void 0) { start = ''; }
    if (!key.length) {
        return [];
    }
    function isSpecialCharacter(char) {
        // Define the list of special characters you want to handle
        var specialCharacters = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/\\';
        return specialCharacters.includes(char);
    }
    /**
     * Recursive helper function to generate case permutations.
     *
     * @param result - An array to store the generated permutations.
     * @param key - The remaining characters to be permuted.
     * @param start - The current permutation being built.
     */
    function permuteString(result, key, start) {
        if (start === void 0) { start = ""; }
        if (key.length === 0) {
            result.push(start);
            return;
        }
        var ch = key[0];
        key = key.substr(1);
        if (isSpecialCharacter(ch)) {
            permuteString(result, key, start + ch);
        }
        else {
            var chLower = ch.toLowerCase();
            var chUpper = ch.toUpperCase();
            permuteString(result, key, start + chLower);
            permuteString(result, key, start + chUpper);
        }
    }
    ;
    var permutedString = [];
    permuteString(permutedString, key, start);
    return permutedString;
}
exports.xPermuteString = xPermuteString;
