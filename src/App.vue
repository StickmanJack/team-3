<template>
  <div id="app" class="text-center">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img class="navbar-brand" src = "./assets/demo-logo.png"></img>
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
  /* Give some headroom to containers. Should be moved to global css*/
.vertical-buffer-3 {margin-top: 3em;}

  .well {
   background-color: rgba(220, 200, 180, 0.8);
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0f13;
  margin-top: 60px;
}

  #under-header {
    height: 100%;
    background-image: url('./assets/demo-background-4a.jpg');
    background-position: center center;
    background-size: cover;
  }
</style>
