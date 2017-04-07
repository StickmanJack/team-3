<template>
  <div> <!--required wrapping div-->
    <div class="col-sm-6">
      <div class="well">
        <p>Weather map</p>
      </div>
    </div>
    <div class="col-sm-6">
        <div class="well">
          <p>Local Details</p>
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
