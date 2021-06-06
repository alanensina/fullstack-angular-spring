let sportsOne: string[] = ['Soccer', 'Golf', 'Cricket', 'Tennis'];
sportsOne.push('Basket');

for (let sport of sportsOne) {
    if (sport == 'Basket') {
        console.log(sport + ', Black Mamba forever!')
    } else {
        console.log(sport);
    }
}