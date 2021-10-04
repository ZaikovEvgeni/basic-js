import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
  s1 = s1.split('');
  s2 = s2.split('');

  let count = 0;
  s1.forEach(element => {
    
    if(s2.indexOf(element, 0) !== -1) {
      let s = s2.indexOf(element, 0);
      s2.splice(s, 1);
      count++;
    }
  });

  return count;
}
