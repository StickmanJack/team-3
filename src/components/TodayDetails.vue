<template>
  <div><!--required wrapping div-->
    <h1>Today's Detailed Forecast</h1>
    <div class="row row-eq-height">
      <div class="col-sm-1"></div>
      <div class="col-sm-6 tall-col">
        <div class="well">
          <h3>Weather map</h3>
          <p>put something new here</p>
        </div>
      </div>
      <div class="col-sm-4 tall-col">
          <div class="well">
            <h3>Local Conditions</h3>
            <h4>Weather:</h4>
            <p>{{description}}</p>
            <h4>Temperature:</h4>
            <p>{{localTemp}}</p>
            <h4>High</h4>
            <p>{{highTemp}}</p>
            <h4>Low</h4>
            <p>{{lowTemp}}</p>
            <h4>Humidity:</h4>
            <p>{{humidity}}</p>
            <h4>Wind:</h4>
            <p>{{speed}} {{direction}}</p>
            <h4>Sunrise</h4>
            <p>{{sunrise}}</p>
            <h4>Sunset</h4>
            <p>{{sunset}}</p>
          </div>
        </div>
      <div class="col-sm-1"></div>
    </div>
  </div><!--end req wrapping div-->
</template>

<script>
// Calls a node module that converts degrees to cardinal directions
var d2d = require('degrees-to-direction')
export default {
  data () {
    return {
      description: '',
      localTemp: '',
      highTemp: '',
      lowTemp: '',
      humidity: '',
      speed: '',
      direction: '',
      sunrise: '',
      sunset: '',
      zip: this.getCookie('zip')
    }
  },
  mounted: function () {
    // Automatically fetch weather when returning to this page from another
    if (this.zip !== '') {
      this.getCurrentConditions()
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
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip + ',us' +
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
        this.sunrise = this.getTime(json.sys.sunrise) + ' am'
        this.sunset = this.getTime(json.sys.sunset) + ' pm'
        // Updates weather icon according to current conditions
        document.getElementById('weather-icon').src = this.getImgUrl(this.conditions + '.png')
      }.bind(this)).catch(function (reason) {
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
      // Values less than 10 will have a '0' inserted infront
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var formattedTime = hours + ':' + minutes
      return formattedTime
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
    .vertical-buffer-3 {margin-top: 3em;}

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
  </style>
