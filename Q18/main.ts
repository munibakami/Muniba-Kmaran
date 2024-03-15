//18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let contriesTovisit: string[] = ["Iraq","Dubai","china","Pakistan"]
console.log("Orginal Order:",contriesTovisit);

//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:",[...contriesTovisit].sort());

//show that the array is still in its Orignal order 
console.log("Still in Orginal Order", contriesTovisit);

//• Print your array in Reversed order without modifying the actual list.
console.log("Reverse Order:",[...contriesTovisit].reverse());

//show that the array is still in its Orignal order 
console.log("Still in Orginal Order:",contriesTovisit);

//we have changed the orginal Array order now
console.log ("Orginal array Reversed:",contriesTovisit.reverse());

//print the array to show that it's back to its Orignal order 
console.log("Back to Orginal Order:",contriesTovisit.reverse());

//print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:",contriesTovisit.sort());

//we have changed the orginal Array order now in reverse order again
console.log ("Orginal array Reversed Again:",contriesTovisit.reverse());