<template>
  <div id="fiveday"> <!--required wrapping div-->
    <h1>Five Day Forecast for {{localCity}}</h1>
    <div class="vertical-buffer-3"></div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-6 col-center">
        <div class="well">
          <h2>Day 1 (Current Day)</h2>
          <img src="../assets/demo-sunny.png" width="100" height="100" v-bind:alt="this.day[0].weather">
          <p>{{this.day[0].highTemp}}/{{this.day[0].highTemp}} F</p>
          <p>{{this.day[0].weather}}</p>
          <p>{{this.day[0].windspeed}} MPH</p>
        </div>
      </div>
    </div>
    <div class="vertical-buffer-3"></div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div class="row row-eq-height">
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 2</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100" v-bind:alt="this.day[1].weather">
                <p>{{this.day[1].highTemp}}/{{this.day[1].highTemp}} F</p>
                <p>{{this.day[1].weather}}</p>
                <p>{{this.day[1].windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 3</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100" v-bind:alt="this.day[2].weather">
                <p>{{this.day[2].highTemp}}/{{this.day[2].highTemp}} F</p>
                <p>{{this.day[2].weather}}</p>
                <p>{{this.day[2].windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 4</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100" v-bind:alt="this.day[3].weather">
                <p>{{this.day[3].highTemp}}/{{this.day[3].highTemp}} F</p>
                <p>{{this.day[3].weather}}</p>
                <p>{{this.day[3].windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 5</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100" v-bind:alt="this.day[4].weather">
                <p>{{this.day[4].highTemp}}/{{this.day[4].highTemp}} F</p>
                <p>{{this.day[4].weather}}</p>
                <p>{{this.day[4].windspeed}} MPH</p>
              </div>
          </div>
        </div>
      </div>
      <div class="col-sm-1"></div>
    </div>
  </div><!--end req wrapping div-->
</template>

<script>
export default {
  name: 'fiveday',
  data () {
    return {
      localCity: 'Springfield',
      day: [
        { highTemp: '0',
          lowTemp: '0',
          weather: '0',
          windspeed: '0'},
        { highTemp: '0',
          lowTemp: '0',
          weather: '0',
          windspeed: '0'},
        { highTemp: '0',
          lowTemp: '0',
          weather: '0',
          windspeed: '0'},
        { highTemp: '0',
          lowTemp: '0',
          weather: '0',
          windspeed: '0'},
        { highTemp: '0',
          lowTemp: '0',
          weather: '0',
          windspeed: '0'}
      ]
    }
  },
  mounted: function () {
    this.getWeather()
  },
  methods: {
    getWeather: function () {
      var requestString = 'http://api.openweathermap.org/data/2.5/forecast?zip=' +
                          '65897,us' +
                          '&format=json' +
                          '&units=imperial' +
                          '&APPID=0c2cf2d862aed4851bd89af90698bc92'
      fetch(requestString)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
        console.log(this)
        if (data.list.length > 0) {
          for (var i = 0; i < 5; i++) {
            var day = data.list[ i * 8 ]
            this.day[i].highTemp = day.main['temp_max']
            this.day[i].lowTemp = day.main['temp_min']
            this.day[i].weather = day.weather[0]['description']
            this.day[i].windspeed = day.wind['speed']
          }
        }
      }.bind(this))
      .catch(function (reason) {
        console.log(reason)
      })
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

    /* extend col content to max height */
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

    .col-center{
      float: none;
      margin: 0 auto;
    }
  </style>
