import { Injectable } from '@angular/core'; //decorator is used to mark a class as a service that can be injected into other components or services in the app.
import { HttpClient } from '@angular/common/http'; //provides methods for making HTTP requests to external APIs.
import { Observable } from 'rxjs'; //Observable is used to handle user input in forms

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1'; // API URL
  private apiKey = '44d0e95edae341eeba0204851242611'; // API key

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`; //url with the app type and key and city embedded.
    return this.http.get(url); //execute the call with the url completed.


  }
}
