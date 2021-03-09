import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  randomNr: number = 0;
  arrayRandom: number[] = [];
  constructor() { }

  /**
   * Observable on arrayRandom values
   * @returns Observable
   */
  checkNrOfMatches(){
    return of(this.arrayRandom);
  }

  /**
   *
   * @returns Gives a random number of matches to start the game
   */
  randomNrOfMatches(){
    this.randomNr = Math.floor(Math.random() * (20 - 15) + 15);
    for(var i = 0; i< this.randomNr; i++){
      this.arrayRandom[i] = 1 ;
    }
    return of(this.arrayRandom);
  }

  /**
   * Decreases the nr of Matches by nr provided in parameter
   * @param nrToDecreaseBy
   */
  decreaseNrOfMatches(nrToDecreaseBy : number){

    let length = this.arrayRandom.length;
    console.log(length);
    for(var i = 1; i <= nrToDecreaseBy; i++){
      this.arrayRandom.pop();
    }
  }

}
