let reviews: number[] = [5, 7, 8, 2, 7, 9, 10];
let total: number = 0;

for (let i: number = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let avg: number = total / reviews.length;

console.log('The average is: ' + avg.toFixed(2));