import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeatherData(cityName:string):Observable<WeatherData>{
   return this.http.get<WeatherData>(environment.weather_base_url,
      {
        headers:new HttpHeaders()
        .set(environment.XRapidAPIKey_header,environment.XRapidAPIKey_value)
        .set(environment.XRapidAPIHost_header,environment.XRapidAPIHost_value),
        params: new HttpParams()
        .set('aggregateHours',12)
        .set('location',cityName)
        .set('contentType','json')
        .set('unitGroup','us')
        .set('shortColumnNames',0)

        
      });
  }
}
