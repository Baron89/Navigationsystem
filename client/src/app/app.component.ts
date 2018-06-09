import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeProduct = 0;
  products = [];
  //configUrl = 'assets/config.json';
  configUrl = 'https://bithackaton.cfapps.eu10.hana.ondemand.com/navigate';
  currentProduct = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addProduct(val){
    this.products.push(val);
    this.updateMap();
  }

  back() {
    this.activeProduct -= 1;
    if(this.activeProduct < 0 ){
      this.activeProduct = 0;
    }
    this.updateMap();
  }
  next() {
    this.activeProduct += 1;
    if(this.activeProduct >= this.products.length ){
      this.activeProduct = this.products.length - 1;
    }
    this.updateMap();
  }

  delete(index){
    this.products.splice(index, 1);
  }

  updateMap(){
    var remainingProducts = this.products.slice(this.activeProduct);
    var itemsString = '"'+remainingProducts[0];
    for(var i=1; i<remainingProducts.length; i++){
      itemsString += "," + remainingProducts[i];
    }
    itemsString += '"';

    this.http.post(this.configUrl, {
      "currentLocation": {
  		"type": "Point",
  		"coordinates": [10, 10]
  	},
	     "items": itemsString
    }).subscribe(data => {
      console.log(data);
      //TODO var rawImage = "data:image/bmp;base64," + data.imageBase64;
      var rawImage = "data:image/bmp;base64,Qk3WCwAAAAAAADYAAAAoAAAAHwAAAOj///8BACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wCA4P8AgOD/AIDg/wCA4P8AgOD/AIDg/wCA4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wCg4P8AoOD/AKDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AMDg/wDA4P8AwOD/AODg/wDg4P8A4OD/AODg/wDg4P8A4OD/AODg/wDg4P8AgMD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AIDA/wCAwP8AgMD/AIDA/wCAwP8AgMD/AIDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AKDA/wCgwP8AoMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8AwMD/AMDA/wDAwP8A4MD/AODA/wDgwP8A4MD/AODA/wDgwP8A4MD/AODA/wCAoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AgKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AICg/wCAoP8AgKD/AICg/wCAoP8AgKD/AICg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wCAoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AgKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AICg/wCAoP8AgKD/AICg/wCAoP8AgKD/AICg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wCAoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8AgKD/AICg/wCAoP8AgKD/AICg/wCAoP8AgKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AoKD/AKCg/wCgoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDAoP8AwKD/AMCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/AOCg/wDgoP8A4KD/";
      //document.getElementById("map").src = rawImage;

      //this.currentProduct = data.shoppingCart.items[0];
    });
  }

}
