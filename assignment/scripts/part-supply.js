console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log(removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
newSupplyChanges = supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

/* for (let i = 0; i < supplyChanges.length; i++) {
  let x = supplyChanges[i];
  if (x > 0) {
    console.log(`Added ${x} parts.`);
  } else if (x = 0) {
    console.log(`No Change.`);
  } else if (x < 0) {
    console.log(`Removed ${x} parts.`);
  }
} */ //First shot at solving this - this code block only logs the positive integers.
// Update - figured it out. It was because I used the wrong operator for x = 0. See below for correction.

/* for (let i = 0; i < supplyChanges.length; i++) {
  let x = supplyChanges[i];
  if (x > 0) {
    console.log(`Added ${x} parts.`);
  } else if (x < 0) {
    console.log(`Removed ${x} parts.`);
  } else if (x == 0) {
    console.log(`No Change.`);
  } else {
    console.log(`Uncertain change.`) //Just added this to troubleshoot if it was a problem with the loop or syntax.
  }
} */

// I would like to make the value of -6 positive, so it just logs 'removed 6 parts' instead of
// 'removed -6 parts'. Based on what google has to say, the math.abs() built in function does this.

for (let i = 0; i < supplyChanges.length; i++) {
  let x = supplyChanges[i];
  if (x > 0) {
    console.log(`Added ${x} parts.`);
  } else if (x < 0) {
    console.log(`Removed ${Math.abs(x)} parts.`);
  } else if (x == 0) {
    console.log(`No Change.`);
  }
}
// And it works! Happy with that.

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.

console.log('7. Showing supplyChanges with "for of" loop');

for (let i of supplyChanges) {
  if (i > 0) {
    console.log(`Added ${i} parts.`);
  } else if (i < 0) {
    console.log(`Removed ${Math.abs(i)} parts.`);
  } else if (i == 0) {
    console.log(`No Change.`);
  }
} //Just had to remove all references to x, because that variable doesn't need
// to exist when using the for of loop, which already iterates through the array

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

let partsAvailable = 0;
for (let i = 0; i < supplyChanges.length; i++) {
  partsAvailable += supplyChanges[i];
}
console.log(partsAvailable);

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let boxes = 0;
i = 572
while (i >= 6) {
  i -= 7;
  ++boxes;
}
console.log(`The number of filled boxes: ${boxes}.`)
console.log(`The number of parts left over: ${i}.`)
