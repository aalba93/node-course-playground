// Regular syntax function
// const square = function (x) {
//     return x * x;
// };


// Regular syntax
// const square = (x) => {
//     return x * x;
// };

// Short-hand syntax
const square = (x) => x * x;

console.log(square(3));

// Arrow functions don't bind the this property, so this is the short-hand syntax for those cases
const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList () {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

event.printGuestList();