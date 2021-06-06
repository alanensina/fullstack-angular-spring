var reviews = [5, 7, 8, 2, 7, 9, 10];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log('The average is: ' + avg.toFixed(2));
