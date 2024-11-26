import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1'; // API URL
  private apiKey = '44d0e95edae341eeba0204851242611'; // API key

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);


  }
}
