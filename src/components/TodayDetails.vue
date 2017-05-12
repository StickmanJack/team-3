<template>
  <div><!--required wrapping div-->
    <h1>Today's Detailed Forecast</h1>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-12 col-sm-6 col-md-5 tall-col">
        <div class="well" id="test">
          <h3>Hourly Forecast</h3>
          <!-- 3 Hour Block 1 -->
          <h4>{{this.hour[0].hour}}</h4>
          <img class="icon" id="icon-0" :src="getImgUrl('blank.png')" width="90" height="90">
          <p>{{this.hour[0].temp}}</p>
          <p>{{this.hour[0].weather}}</p>
          <p>{{this.hour[0].windspeed}} {{this.hour[0].direction}}</p>
          <!-- 3 Hour Block 2 -->
          <h4>{{this.hour[1].hour}}</h4>
          <img class="icon" id="icon-1" :src="getImgUrl('blank.png')" width="90" height="90">
          <p>{{this.hour[1].temp}}</p>
          <p>{{this.hour[1].weather}}</p>
          <p>{{this.hour[1].windspeed}} {{this.hour[1].direction}}</p>
          <!-- 3 Hour Block 3 -->
          <h4>{{this.hour[2].hour}}</h4>
          <img class="icon" id="icon-2" :src="getImgUrl('blank.png')" width="90" height="90">
          <p>{{this.hour[2].temp}}</p>
          <p>{{this.hour[2].weather}}</p>
          <p>{{this.hour[2].windspeed}} {{this.hour[2].direction}}</p>
          <!-- 3 Hour Block 4 -->
          <h4>{{this.hour[3].hour}}</h4>
          <img class="icon" id="icon-3" :src="getImgUrl('blank.png')" width="90" height="90">
          <p>{{this.hour[3].temp}}</p>
          <p>{{this.hour[3].weather}}</p>
          <p>{{this.hour[3].windspeed}} {{this.hour[3].direction}}</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-5 tall-col">
          <div class="well">
            <h3>Local Conditions</h3>
            <h4>Weather:</h4>
            <p>{{description}}</p>
            <h4>Temperature:</h4>
            <p>{{localTemp}}</p>
            <h4>High:</h4>
            <p>{{highTemp}}</p>
            <h4>Low:</h4>
            <p>{{lowTemp}}</p>
            <h4>Humidity:</h4>
            <p>{{humidity}}</p>
            <h4>Wind:</h4>
            <p>{{speed}} {{direction}}</p>
            <h4>Sunrise:</h4>
            <p>{{sunrise}}</p>
            <h4>Sunset:</h4>
            <p>{{sunset}}</p>
          </div>
        </div>
      <div class="col-md-1"></div>
    </div>
  </div><!--end req wrapping div-->
</template>

<script>
// Calls a node module that converts degrees to cardinal directions
var d2d = require('degrees-to-direction')
export default {
  data () {
    return {
      // For hourly forecast
      hour: [
        { temp: '',
          weather: '',
          windspeed: '',
          hour: ''},
        { temp: '',
          weather: '',
          windspeed: '',
          hour: ''},
        { temp: '',
          weather: '',
          windspeed: '',
          hour: ''},
        { temp: '',
          weather: '',
          windspeed: '',
          hour: ''},
        { temp: '',
          weather: '',
          windspeed: '',
          hour: ''}
      ],
      // For current conditions
      description: '',
      localTemp: '',
      highTemp: '',
      lowTemp: '',
      humidity: '',
      speed: '',
      direction: '',
      sunrise: '',
      sunset: '',
      deg: '&deg;',
      zip: this.getCookie('zip')
    }
  },
  mounted: function () {
    // Automatically fetch weather when returning to this page from another
    if (this.zip !== '') {
      this.getCurrentConditions()
      this.get3Hour()
    }
  },
  methods: {
    // Access weather API and get current weather info
    getCurrentConditions: function () {
      this.description = 'Loading...'
      this.localTemp = 'Loading...'
      this.highTemp = 'Loading...'
      this.lowTemp = 'Loading...'
      this.humidity = 'Loading...'
      this.speed = 'Loading...'
      this.sunrise = 'Loading...'
      this.sunset = 'Loading...'
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=' +
                this.zip +
                ',us' +
                '&units=imperial' + // Unit default is Kelvin
                '&appid=0c2cf2d862aed4851bd89af90698bc92'
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {
        // Set current temperature and conditions
        this.description = json.weather[0].main
        this.localTemp = json.main.temp + String.fromCharCode(176) + ' F'
        this.highTemp = json.main.temp_max + String.fromCharCode(176) + ' F'
        this.lowTemp = json.main.temp_min + String.fromCharCode(176) + ' F'
        this.humidity = json.main.humidity + '%'
        this.speed = json.wind.speed + ' mph'
        this.direction = d2d(json.wind.deg)
        this.sunrise = this.getTime(json.sys.sunrise)
        this.sunset = this.getTime(json.sys.sunset)
      }.bind(this)).catch(function (reason) {
        console.log(reason)
      })
    },
    get3Hour: function () {
      for (let i = 0; i < 4; i++) {
        this.hour[i].temp = 'Loading...'
        this.hour[i].weather = 'Loading...'
        this.hour[i].windspeed = 'Loading...'
        this.hour[i].hour = 'Loading...'
      }
      let url = 'http://api.openweathermap.org/data/2.5/forecast?zip=' +
              this.zip +
              ',us' +
              '&units=imperial' +
              '&APPID=0c2cf2d862aed4851bd89af90698bc92'
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {
        // console.log(json)
        if (json.list.length > 0) {
          for (let i = 0; i < 4; i++) {
            this.hour[i].temp = json.list[i].main.temp + String.fromCharCode(176) + ' F'
            this.hour[i].weather = json.list[i].weather[0].description
            this.hour[i].windspeed = json.list[i].wind.speed + ' mph'
            this.hour[i].direction = d2d(json.list[i].wind.deg)
            document.getElementById('icon-' + i).src = this.getImgUrl(json.list[i].weather[0].main + '.png')
            this.hour[i].hour = this.getTime(json.list[i].dt)
          }
        }
      }.bind(this))
      .catch(function (reason) {
        console.log(reason)
      })
    },
    getCookie: function (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    getTime: function (timestamp) {
      var date = new Date(timestamp * 1000)
      // Converts military hours into standard hours
      var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
      // Determine am or pm
      var ampm = date.getHours() < 12 ? ' am' : ' pm'
      // Values less than 10 will have a '0' inserted infront
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var formattedTime = hours + ':' + minutes + ampm
      return formattedTime
    },
    getImgUrl: function (img) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + img)
    }
  }
}
</script>

<style>

    .row-eq-height {
      flex-direction:row;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display:         flex;
    }

    /* Give some headroom to containers. Should be moved to global css*/
    .vertical-buffer-3 {margin-top: 2.5em;}
    .vertical-buffer-5 {margin-top: 2.5em;}

    /* extend col content to max height, works with row-eq-height */
    .tall-col {
      display: flex;
      flex-direction: column;
    }

    .tall-col div {
      flex: 1;
    }

    /* Remove the navbar's default margin-bottom and rounded borders */
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }

    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}

    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }

    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }

    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;}
    }

    .container-fluid{
        background-color: white;
    }

    h3 {
      font-weight: Bold;
    }

    h4 {
      font-weight: Bold;
    }

    .icon {
      float: left;
      margin-left: 95px;
    }
  </style>
