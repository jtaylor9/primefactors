/**
 * Created by jtayl_000 on 10/8/2015.
 */

/*exported projEulThree*/

/**
 * This function determines the greatest prime number of the given input
 * @param num ; the incoming number to acquire the greatest prime
 * @returns the greatest prime factor of num in the array that stored the values
 */
function projEulThree(num) {
  var pFactors = [];
  var div = 2;

  if (isNaN(num)) {
    throw new Error("Non-numeric Input.");
  }

  while (num > 1) {
    while ((num % div === 0)) {
      pFactors.push(div);
      num /= div;
    }
    div += 1;
  }
  return pFactors[pFactors.length - 1];
}