// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minutes = 0;
  switch(name) {
    case 'Pure Strawberry Joy':
      minutes = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      minutes = 1.5;
      break;
    case 'Tropical Island':
      minutes = 3;
      break;
    case 'All or Nothing':
      minutes = 5;
      break;
    default:
      minutes = 2.5;
  }
  return minutes;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let i = 0;
  if (wedgesNeeded != 0 && limes.length != 0) {
    while (i < limes.length) {
      switch(limes[i]) {
        case "small":
          wedges += 6;
          break;
          
        case "medium":
          wedges += 8;
          break;
          
        case "large":
          wedges += 10;
          break;
          
        default:
          break;
      }
      i++;
      if (wedges >= wedgesNeeded) break;
    }
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  do {
    timeLeft -= timeToMixJuice(orders[i]);
    i++
  } while (timeLeft > 0 && orders.length > i);
  return orders.slice(i);
}
