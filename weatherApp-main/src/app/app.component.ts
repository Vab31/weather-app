import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  constructor(private weatherService: WeatherService) {

  }
  // weatherData?:WeatherData 
  searchval: string = 'Mumbai';
  stringJson: any;
  stringObject: any;
  tempi: any;
  flag: any;
  humidty_val: any
  wind_val: any
  sunrise: any
  heatindex: any
  moonphase: any
  alerts: any;




  ngOnInit(): void {
                      console.log(this.searchval)
                      this.flag = this.searchval;
                      this.weatherService.getWeatherData(this.searchval)
                        .subscribe({
                          next: (respone) => {
                            this.stringJson = JSON.stringify(respone);
                            console.log("String json object :", this.stringJson);
                            console.log("Type :", typeof this.stringJson);


                            // ConvertjSON to an object

                            this.stringObject = JSON.parse(this.stringJson);
                            console.log("JSON object -", this.stringObject);
                            this.tempi = ((this.stringObject.locations[this.flag].currentConditions.temp - 32) * (5.0 / 9.0)).toFixed(1);


                            this.humidty_val = this.stringObject.locations[this.flag].currentConditions.humidity
                            this.wind_val = this.stringObject.locations[this.flag].currentConditions.wspd
                            this.moonphase = this.stringObject.locations[this.flag].currentConditions.moonphase
                            this.heatindex = this.stringObject.locations[this.flag].currentConditions.heatindex
                            // this.alerts = this.stringObject.locations[this.flag].alerts
                            this.alerts = "jid"



                            console.log("helo temp");
                            console.log(this.tempi);

                            // this.weatherData=respone;        // console.log(typeof(this.weatherData))
                            

        }
       
      })
  }
  
   
 

}
