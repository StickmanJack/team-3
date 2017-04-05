<template>
      <div class="container-fluid text-center">
        <div class="row content">
          <div class="col-sm-2 sidenav">
                <img src="../assets/demo-sunny.png" width="100" height="100">
                <h3>Springfield, MO</h3>
                <p>68 F</p>
         </div>
          <div class="col-sm-8 text-left">
            <h1>Welcome</h1>
            <p>{{weather}}</p>
            <hr>
            <h3>Test</h3>
            <p>Lorem ipsum...</p>
          </div>
          <div class="col-sm-2 sidenav">
            <div class="well">
              <p>Forecast</p>
            </div>
            <div class="well">
              <p>Detailed</p>
            </div>
          </div>
        </div>
      </div>


</template>

<script>
export default {
  data () {
    return {
      quote: 'Quote of the day'
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
