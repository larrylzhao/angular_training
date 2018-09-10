import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {setInterval} from "timers";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  gameInterval = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }



  onStart() {
    this.interval = setInterval(() => {
      this.gameInterval++;
      this.intervalFired.emit(this.gameInterval)
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
