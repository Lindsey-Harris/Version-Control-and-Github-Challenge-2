//const square = function (x) {
    // return x * x
//}

const event = {
    name: 'Birthday Party',
    guestList: ['Lindsey', 'Mike', 'Sam'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.printGuestList.forEach(guest) => {
            console.log(guest + ' is something ' + this.name)
        }
    }
}

