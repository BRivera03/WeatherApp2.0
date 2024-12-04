
Angular/JS Weather App
This README file works as a documentation/dev process for creating the weather angular app
My goal is to create a web weather app, to show a different variety of information about the weather at the user’s selected locations. I will use a weather API and fetch all the data.

Used Angular api calls to create the HTTP getting the information I need for the weather app.

API - I used https://www.weatherapi.com/ as my API. 
The documentation for the api is  here https://www.weatherapi.com/docs/

Dev Process:
**weather.service
**Create an angular app using ng new weatherApp –no-standalone to avoid changes to app.module.ts in new angular version 17

Import HTTP module to app.module.ts to handle http requests
Import Forms module to app.module.ts to handle forms

In order to connect the API, I needed to create a service for the weather app.
Instead of API calls using AJAX, I need to create the service and set up the api url and api key.

https://v17.angular.io/tutorial/tour-of-heroes/toh-pt4
Create a service for the api in the angular app using:
ng generate service weather

This creates a weather.service.ts file to set up api calls.
In this file I inject api information like the headers and key in AJAX

Weather.service Key Parts
constant variables for api url and api key from my account
Observable is used to handle asynchronous data retrieval. 
Embedded key and url along with city value to call the api with the request. Similar to Ajax in JS I need to create the url with these values anc use that url for the Http request.

About Observable:
Stream of Data: An Observable represents a stream of values that can be emitted over time. Think of it as a collection of data that arrives asynchronously, like events from user input, HTTP responses.
Observer Pattern: Observables follow the observer pattern, where an Observable (the producer) emits values, and an Observer (the consumer) subscribes to receive those values
https://v17.angular.io/guide/observables-in-angular




**App.Component.ts
Created variables:
city which is a string
weatherData which can be any, or in this case is JSON 
error: string or null

this.weatherService.getWeather(this.city).subscribe({: This line calls the getWeather method on the injected weatherService class, passing the city value from the user. 

The subscribe works to handle async data and wait for data to be available from the api and process it with callback functions.

To handle the response:
next: (data) This function is called if the weather data is successfully retrieved (data). Inside, it updates the weatherData property with the received data and clears any existing error message.
error: (err) This function is called if an error occurs during data retrieval (err). Inside, it sets the error property to an error message and clears any previously received weather data.






HTML 
Key Process & Functionality: 
The user enters a city name in the input field.
The ngModel binds the entered value to the city property in your component.

Binds the value of an HTML input element (<input>) to the city property in the component's. It enables data binding, meaning changes in the input are reflected in the component's property.

When the "Get Weather" button is blurred, a function getWeather() is called in your component, using the injected WeatherService to fetch weather data for the entered city.

If the weather data is successfully retrieved, the weatherData property is populated, causing the first <div> with *ngIf="weatherData" to be displayed, showing the weather information.

If there's an error fetching the weather data, the error property is populated, causing the second <div> with *ngIf="error" to be displayed, showing the error message.




CSS
Vanilla css was used even though bootstrap was installed and set up. 


Keep in mind that app might not work if checking in the future since its a free trial and api key might change after it ends. To solve this create a new account and modify the code with the updated key and it should work.


