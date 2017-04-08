<template>
  <div> <!--required wrapping div-->
    <h1>Five Day Forecast for {{localCity}}</h1>
    <div class="vertical-buffer-3"></div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-6 col-center">
        <div class="well">
          <h2>Day 1 (Current Day)</h2>
          <img src="../assets/demo-sunny.png" width="100" height="100">
          <p>{{day1HighTemp}}/{{day1LowTemp}} F</p>
          <p>{{day1Windspeed}} MPH</p>
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
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <p>{{day2HighTemp}}/{{day2LowTemp}} F</p>
                <p>{{day2Windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 3</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <p>{{day3HighTemp}}/{{day3LowTemp}} F</p>
                <p>{{day3Windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 4</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <p>{{day4HighTemp}}/{{day4LowTemp}} F</p>
                <p>{{day4Windspeed}} MPH</p>
              </div>
          </div>
          <div class="col-sm-3 tall-col">
              <div class="well">
                <h2>Day 5</h2>
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <p>{{day5HighTemp}}/{{day5LowTemp}} F</p>
                <p>{{day5Windspeed}} MPH</p>
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
  data () {
    return {
      localCity: 'Springfield',
      day1HighTemp: '75',
      day1LowTemp: '50',
      day1Weather: 'sunny',
      day1Windspeed: '1.67',

      day2HighTemp: '100',
      day2LowTemp: '45',
      day2Weather: 'raining',
      day2Windspeed: '30',

      day3HighTemp: '25',
      day3LowTemp: '30',
      day3Weather: 'snow',
      day3Windspeed: '1.2',

      day4HighTemp: '50',
      day4LowTemp: '65',
      day4Weather: 'cloudy',
      day4Windspeed: '2',

      day5HighTemp: '70',
      day5LowTemp: '55',
      day5Weather: 'sunny',
      day5Windspeed: '1.5'
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
