
# HOW TO USE

## **Get Started**
1.	Run `yarn` 				

	This installs depedencies

2. Create an `.env` file and add the following values
```js
	NEXT_PUBLIC_BASE_URL=https://api.openweathermap.org
	NEXT_PUBLIC_API_KEY=1093445eb7b9362f8d97474f6fbc969c
```


3. Run `yarn dev`

	This will startt the app

4. Open   `http://localhost:3000/` on your browser. Ensure you are not running an app on this port.



## **Usage**
1.	When asked to **allow app to use your location**, click `Allow`  button. This allows the app to pick your longitude and latitude cordinates and display the weather information.
2. You can also type in a country, city or state name into the large search bar. Details of the location will be fetched.
3. You might as well type in a static latitude and longitude values in the menu section. After which you should click search.
4. The unit dropdown select is also visible on the menu bar. This changes the - 

	 1. temperature unit to either `Celcius`, `Fahrenheit` or `Kelvin`

	 2. wind speed unit to either ` meter/sec`, `meter/sec,` or ` miles/hour`
5. The background changes based on the weather status.