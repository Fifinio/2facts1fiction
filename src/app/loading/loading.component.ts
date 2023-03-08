import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input() time: number = 0;
  progress: number = 0;
  // create a loop that increments the progress every 50ms until the time has elapsed;
  // then, set the time to 0 and stop the loop

  ngOnInit(): void {
    this.time += 100;
    let ticks = this.time / 50;
    let interval = setInterval(() => {
      this.progress += Math.floor(100 / ticks);
      if (this.progress >= 100) {
        clearInterval(interval);
      }
    });
  }
}
