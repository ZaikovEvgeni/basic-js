import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!members || members === 'undefined' || members.length === 0 || !Array.isArray(members) ) {
    return false;
  }
  let secretName = '';
    for(let member of members) {
      if(typeof member === 'string') {
        member = member.trim();
        secretName += member[0];
      }
    }
    if(secretName.length === 0) {
      return false;
    } else {
      secretName = secretName.toUpperCase().split('').sort().join('');
      return secretName;
    }

  
}
