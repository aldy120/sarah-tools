import { hours2Days } from '../js/hours2days.mjs';

const j = x => JSON.stringify(x)
console.log('hours2Days')
console.log('1')
console.assert(j(hours2Days(23)) === j({ days: 2, hours: 7 }))
console.log('2')
console.assert(j(hours2Days(24)) === j({ days: 3, hours: 0 }))
console.log('3')
console.assert(j(hours2Days(47)) === j({ days: 5, hours: 7 }))
console.log('4')
console.assert(j(hours2Days(48)) === j({ days: 6, hours: 0 }))
console.log('5')
console.assert(j(hours2Days(49)) === j({ days: 6, hours: 1 }))