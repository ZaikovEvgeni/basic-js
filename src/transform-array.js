import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr = [];
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  else if (arr.length === 0) {
    return [];
  }
  else {
    
    newArr = arr.slice();
    for (let index = 0; index < newArr.length; index++) {
      if (newArr[index] === '--discard-next' || newArr[index] === '--discard-prev'
        || newArr[index] === '--double-next' || newArr[index] === '--double-prev') {
        switch (newArr[index]) {
          case '--discard-next':
            if (index <= newArr.length) {
              if (index < newArr.length - 1) {
                newArr.splice(index, 2);
                if (newArr[index] == '--double-prev' || newArr[index] == '--discard-prev') {
                  newArr.splice(index, 1);
                }

              } else {
                newArr.splice(index, 1);

              }
            }
            index = 0;
            break;
          case '--discard-prev':
            if (index >= 0) {
              if (index === 0) {
                newArr.splice(index, 1);
              } else {

                newArr.splice(index - 1, 2);
              }
            }
            index = 0;
            break;
          case '--double-next':
            if (index <= newArr.length - 1) {
              if (index === newArr.length - 1) {
                newArr.splice(index, 1);
              } else {
                newArr.splice(index, 1);
                newArr.splice(index, 0, newArr[index])
              }
            }
            index = 0;
            break;
          case '--double-prev':
            if (index >= 0) {
              if (index === 0) {
                newArr.splice(index, 1);
              } else {
                newArr.splice(index, 1);
                newArr.splice(index, 0, newArr[index - 1])

              }
              index = 0;
              break;
            }
        }
      }
    }
   
    return newArr;
  }
}
