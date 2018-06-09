import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  min = 0;
  points = [];

  ngOnInit() {
    this.points = [
      {x: 0, y: 0},
      {x: 400, y: 350},
      {x: 600, y: 400},
    ];
    this.printRoute();
  }

  printRoute(){
    var svg = ''
    var i;
    for (i = this.min; i < this.points.length; i++) {
        svg += '<circle cx="' + this.points[i].x + '" cy="' + this.points[i].y + '" r="5" fill="red" />'
    };

    for (i = this.min; i < this.points.length - 1; i++) {
        svg += '<line x1="'+this.points[i].x+'" y1="'+this.points[i].y+'" x2="'+this.points[i+1].x+'" y2="'+this.points[i+1].y+'" style="stroke:rgb(255,0,0);stroke-width:2" />'
    };

    document.getElementById("overlay").innerHTML = svg;
  }

  back() {
    this.min -= 1;
    this.printRoute();
  }
  next() {
    this.min += 1;
    this.printRoute();
  }

}
