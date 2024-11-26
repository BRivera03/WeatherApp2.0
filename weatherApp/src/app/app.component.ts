import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = '';
  weatherData: any;
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
