import { BasketballCoach } from "./BasketballCoach";
import { Coach } from "./Coach";
import { SoccerCoach } from "./SoccerCoach";

let mySoccerCoach = new SoccerCoach();
let myBasketballCoach = new BasketballCoach();

let theCoaches: Coach[] = [];
theCoaches.push(mySoccerCoach);
theCoaches.push(myBasketballCoach);

for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout())
}