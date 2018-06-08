import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    var points = [
      {x: 10, y: 30},
      {x: 40, y: 40},
      {x: 80, y: 40},
      {x: 100, y: 40},
      {x: 130, y: 40},
      {x: 150, y: 40},
      {x: 170, y: 40},
    ];

    var min=0;

    setInterval((){
      console.log(points);
      var svg = ''
      var i;
      for (i = min; i < points.length; i++) {
          svg += '<circle cx="' + points[i].x + '" cy="' + points[i].y + '" r="5" fill="red" />'
      }

      for (i = min; i < points.length - 1; i++) {
          svg += '<line x1="'+points[i].x+'" y1="'+points[i].y+'" x2="'+points[i+1].x+'" y2="'+points[i+1].y+'" style="stroke:rgb(255,0,0);stroke-width:2" />'
      }

      document.getElementById("overlay").innerHTML = svg;
      //min++;

    }, 1000);

}
