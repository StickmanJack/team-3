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
            <p>{{localTemp}} F</p>
            <h4>High</h4>
            <p>{{highTemp}} F</p>
            <h4>Low</h4>
            <p>{{lowTemp}} F</p>
            <h4>Humidity:</h4>
            <p>{{humidity}}%</p>
            <h4>Wind:</h4>
            <p>{{speed}} mph {{direction}}</p>
            <h4>Sunrise</h4>
            <p>{{sunrise}} am</p>
            <h4>Sunset</h4>
            <p>{{sunset}} pm</p>
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
      description: 'Light Rain',
      localTemp: '75',
      highTemp: '77',
      lowTemp: '68',
      humidity: '86',
      speed: '5.1',
      direction: 'NE',
      sunrise: '6:45',
      sunset: '7:01'
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
