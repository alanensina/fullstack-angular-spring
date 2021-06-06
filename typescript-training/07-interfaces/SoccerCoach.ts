import { Coach } from './Coach';

export class SoccerCoach implements Coach {

    getDailyWorkout(): string {
        return `Practice your free kick shots!`;
    }

}