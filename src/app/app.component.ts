import { Component, OnInit } from '@angular/core';
import { MatchesService } from './service/matches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'matches';
  nrOfMatches: number[] = [];
  isPlayerOne: boolean = true;

  constructor(private matchesService: MatchesService){}

  ngOnInit(){
    //Initialize random number of matches by calling matches service
    this.matchesService.randomNrOfMatches();

    //Verify state of values in array of matches
    this.matchesService.checkNrOfMatches()
        .subscribe(result => {
          console.log(result);
          this.nrOfMatches = result;

        }, err => {
          console.log(err);
        })
  }

/**
 * Method: call matches service to decrease the total number of matches by the choosen number
 * @param nrToDecreaseBy
 */
  onDismissMatches(nrToDecreaseBy : number){

    this.matchesService.decreaseNrOfMatches(nrToDecreaseBy);
    this.isPlayerOne = !this.isPlayerOne;
  }

  /**
   * Reinitialize website window for a new game
   */
  onPlayAgain(){
    window.location.reload();
  }
}
