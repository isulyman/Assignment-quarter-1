let onumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of onumbers) {
  let x;
  if (number === 1) {
    x = "st";
  } else if (number === 2) {
    x = "nd";
  } else if (number === 3) {
    x = "rd";
  } else {
    x = "th";
  }
  console.log(`${number}${x}`);
}
