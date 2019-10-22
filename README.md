# G3 Daily Briefing

Provides users with a daily briefing of weather and other info. The home page allows the user to enter a name, goal for the day, and zipcode. The zipcode is passed to the weather API that returns weather data for that zipcode. The Home page displays the current condtions, a quote of the day fetched from another API, and the user's input goal of the day. The Weather Details page displays more detailed current conditions plus an hourly forecast. The 5-Day page shows the expected weather for the next five days.

Advanced Internet Programming class project with a 5 person development team using Vue.js.

## Home Screen
![Home Screen](/img/Home.png)

## Today's Weather
![Today's Weather](/img/Weather-Details.png)

## 5 Day Forecast
![5 Day Forecast](/img/5-Day.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
