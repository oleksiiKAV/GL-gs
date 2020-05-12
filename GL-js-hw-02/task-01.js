const logItems = function(array) {
  // One way
  // for (let i = 0; i < array.length; i++) {
  //   console.log(`Element ${i + 1} has ${array[i]} value`);
  // }

  // Second way
  array.forEach(function(item, i) {
    console.log(`Element ${i + 1} has ${item} value`);
  });
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
