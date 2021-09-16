import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi( disksNumber, turnsSpeed ) {
  let oneTurnDisk = turnsSpeed / 3600;    
  console.log(oneTurnDisk);
  let i = 1;
  let k = 2;

  let count = 0;
hanoi(disksNumber, i, k);

  function hanoi(disksNumber, i, k) {
      count++;
      if (disksNumber === 1) {
          return 1;
      } else {
         
          let tmp = 6 - i - k;
          hanoi(disksNumber - 1, i, tmp);
          hanoi(disksNumber - 1, tmp, k)

      }
     
  }
  
  return {
      turns: count,
      seconds: Math.floor(count / turnsSpeed * 3600),
  }
}
