<template>
        <div>
          <div class="col-sm-2 sidenav">
            <div>
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <h3>{{localCity}}</h3>
                <p>{{localTemp}} F</p>
            </div>
         </div>
          <div class="col-sm-8 text-left">
            <h2 class="otd-head">Quote of the Day:</h2>
            <p>{{quote}}</p>
            <h2>{{gotd}}</h2>
          </div>
          <div class="col-sm-2 sidenav">
            <div>
              <router-link to="Details">Weather Details</router-link>
            </div>
            <div>
              <router-link to="Forecast">5-Day</router-link>
            </div>
          </div>
        </div>


</template>

<script>
export default {
  data () {
    return {
      quote: '\'Simplicity is prerequisite to reliability\' - Dijkstra',
      localCity: 'Springfield',
      localTemp: '75'
    }
  }

}
</script>
<style>
    /*'of the day' headings*/
    .otd-head{
      Font-Size: 18pt;
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
  </style>
