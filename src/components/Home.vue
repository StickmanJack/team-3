<template>
  <div> <!--required wrapping div-->
    <h1>Good Afternoon Chad!</h1>
    <div class="row">
      <div class="col-sm-1 ">
        <img src="../assets/demo-sunny.png" width="100" height="100">
        <h3>{{localCity}}</h3>
        <p>{{localTemp}} F</p>
      </div>
      <div class="col-sm-1"></div>
      <div class="col-sm-8 text-center">
        <div class="well"><h2>{{quote}}</h2></div>
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="well"><h2>{{gotd}}</h2></div>
      </div>
    </div>
  </div><!--end req wrapping div-->


</template>

<script>
export default {
  data () {
    return {
      quote: '\'Simplicity is prerequisite to reliability\' - Dijkstra',
      localCity: 'Springfield',
      localTemp: '75',
      gotd: 'Finish static views!'
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
