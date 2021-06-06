"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasketballCoach_1 = require("./BasketballCoach");
var SoccerCoach_1 = require("./SoccerCoach");
var mySoccerCoach = new SoccerCoach_1.SoccerCoach();
var myBasketballCoach = new BasketballCoach_1.BasketballCoach();
var theCoaches = [];
theCoaches.push(mySoccerCoach);
theCoaches.push(myBasketballCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkout());
}
