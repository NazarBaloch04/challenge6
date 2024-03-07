"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let finalList = ["Siraj", "Noman", "Parvaiz"];
for (let name of finalList) {
    console.log(` ${name} `);
}
let newGuestInBegging = ["Sana Ullah"];
finalList.unshift("Sana Ullah");
console.log(finalList);
let newGuestInMiddle = "Nabi Dost";
let middleIndex = Math.floor(finalList.length / 2);
finalList.splice(middleIndex, 0, newGuestInMiddle);
console.log(finalList);
let newGuestInEnd = "Qasim";
finalList.push(newGuestInEnd);
console.log(finalList);
let messageForfinalList = "we had found a bigger dinner Table";
for (let list of finalList)
    console.log(`${list} ${messageForfinalList}`);
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guests = ["Sana Ullah", "Siraj", "Nabi Dost", "Noman", "Parvaiz", "Qasim"];
let messagetoguests = "new dinner table won’t arrive in time for the dinner there is only  space for only two guests.";
for (let name of guests) {
    console.log(`sorry ${name} ${messagetoguests}`);
}
while (guests.length > 2) {
    const removedguest1 = guests.pop();
    console.log(`sorry ${removedguest1} you are no longer invited for dinner to night`);
}
guests.forEach((guests) => {
    console.log(`${guests} you are still invited for dinner`);
});
guests.pop();
guests.pop();
console.log("Final guest List is empty:", guests);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// step 1 Think of at least five places in the world you’d like to visit
let travelDestinations = ["Madina Munwara", "Iraq", "Iran", "Singa pur", "England"];
// step 2 Store the locations in a array. Make sure the array is not in alphabetical order. Print your array in its original order.
console.log("Original order:");
console.log(travelDestinations);
// step 3 Print your array in alphabetical order without modifying the actual list.
console.log("/n alphabetical order without modifying the actual list ");
console.log([...travelDestinations].sort());
// step 4 Show that your array is still in its original order by printing it again.
console.log("\n showing that array is still in its original order");
console.log(travelDestinations);
// Step 5  Reverse the order of your list. Print the array to show that its
// order has changed.
console.log("\n showing that order has changed");
console.log([...travelDestinations].sort());
// step 6  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n showing that array is still in its original order");
console.log(travelDestinations);
// step 7  Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n showing that order has changed");
console.log([...travelDestinations].sort());
// step 8 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n showing that array is still in reverse alphabetical order");
console.log(travelDestinations);
