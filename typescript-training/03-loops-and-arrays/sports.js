var sportsOne = ['Soccer', 'Golf', 'Cricket', 'Tennis'];
sportsOne.push('Basket');
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == 'Basket') {
        console.log(sport + ', Black Mamba forever!');
    }
    else {
        console.log(sport);
    }
}
