import { Component, OnInit } from '@angular/core';
import {Game} from '../_models/game';
import {GameService} from '../_services/game.service';
import {Sport} from '../_models/sport';
import {AuthService} from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baseballbets',
  templateUrl: './baseballbets.component.html',
  styleUrls: ['./baseballbets.component.css']
})
export class BaseballbetsComponent implements OnInit {


  games: Game[] = [];

  sport: string;

  constructor(private gameService: GameService, private authService: AuthService, private route: Router) {
    this.sport = this.route.url.substring(1, this.route.url.length);
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {

    this.gameService.getUpcomingGames(Sport.baseball).subscribe(data => {
      this.games = data;
      console.log(data);
    });
  }

  getUserAvailableMoney(): number {
    return this.authService.currentUserValue.available;
  }

}
