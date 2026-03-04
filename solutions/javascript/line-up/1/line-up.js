//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  console.log(name, number);
  const normalizedNumber = String(number);
  let numbersEnd = normalizedNumber.slice(-1);

  if (numbersEnd.endsWith("1") && normalizedNumber != "11" && normalizedNumber != "111") {
    return `${name}, you are the ${normalizedNumber}st customer we serve today. Thank you!`
  } else if (numbersEnd.endsWith("2") && normalizedNumber != "12" && normalizedNumber != "112") {
    return `${name}, you are the ${normalizedNumber}nd customer we serve today. Thank you!`
  } else if (numbersEnd.endsWith("3") && normalizedNumber != "13" && normalizedNumber != "113") {
    return `${name}, you are the ${normalizedNumber}rd customer we serve today. Thank you!`
  } else {
    return `${name}, you are the ${normalizedNumber}th customer we serve today. Thank you!`
  }
};
