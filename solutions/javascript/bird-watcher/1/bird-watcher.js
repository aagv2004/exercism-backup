// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let suma = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    suma += birdsPerDay[i]
  }
  return suma
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let suma = 0;
  let inicio = (week - 1) * 7;
  let fin = inicio + 7;
  for (let i = inicio; i < fin; i++) {
    suma += birdsPerDay[i]
  }
  return suma
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let suma = 0
  for (let i = 0; i < birdsPerDay.length; i+= 2) {
    birdsPerDay[i]++
  }
  return birdsPerDay;
}
