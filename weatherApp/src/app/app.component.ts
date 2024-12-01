import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = ''; //the form in HTML stores the input value in here
  weatherData: any; //the data that is going to be displayed in the HTML if theres any
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'City not found or API error.';
        this.weatherData = null;
      }
    });
  }
}
