import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Information } from '../services/information';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  round: Information[] = [];
  isLoading: boolean = true;
  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.round = this.gameService.generateRound();
      this.isLoading = false;
    }, 1000);
  }

  onInfoClick(information: Information) {
    if (information.isFact) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
    this.round = this.gameService.generateRound();
  }
}
