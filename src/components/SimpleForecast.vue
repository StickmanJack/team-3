<template>
  <div> <!--required wrapping div-->
    <h1>Five Day Forecast</h1>
    <div class="vertical-buffer-3"></div>
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-6">
        <div class="well">
          <p>Day 1 (Current Day)</p>
        </div>
      </div>
    </div>
    <div class="vertical-buffer-3"></div>
    <div class="row row-eq-height">
      <div class="col-sm-3 tall-col">
          <div class="well">
            <p>Day 2</p>
          </div>
      </div>
      <div class="col-sm-3 tall-col">
          <div class="well">
            <p>Day 3</p>
          </div>
      </div>
      <div class="col-sm-3 tall-col">
          <div class="well">
            <p>Day 4</p>
          </div>
      </div>
      <div class="col-sm-3 tall-col">
          <div class="well">
            <p>Day 5</p>
            <p>80 F</p>
          </div>
      </div>
    </div>
  </div><!--end req wrapping div-->
</template>

<script>
export default {
  data () {
    return {

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
  </style>
