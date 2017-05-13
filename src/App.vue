<template>
  <div id="appl" class="text-center">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img class="navbar-brand" src = "./assets/logo.png"></img>
        </div>

        <!-- collapsing navbar taken from bootstrap example 1-->
        <div class="collapse navbar-collapse" id="bs-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="Details">Weather Details</router-link></li>
            <li><router-link to="Forecast">5-Day</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
    <div  id="under-header" class="container-fluid" >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}

</script>

<style>
html, body {
  height: 100%;
}

  /* Give some headroom to containers. Should be moved to global css*/
.vertical-buffer-3 {margin-top: 3em;}

  .well {
   background-color: rgba(128, 150, 180, 0.7);
  }

#appl {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0f13;
  margin-top: 60px;

  height: 100%;
}

#under-header {
    background-image: url('./assets/changing-weather.jpg');
    background-position: fixed;
    background-size: cover;
    height: 100%;
}

</style>
