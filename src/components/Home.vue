<template>
  <div> <!--required wrapping div-->
    <div class="vertical-buffer-5"></div>
    <h1>Good Afternoon {{username}} !</h1>
    <button v-on:click="checkCookie ()"> Enter Name and Goal of the Day </button>
    <button v-on:click="deleteCookie ()"> Reset Name and Goal </button>
    <div class="vertical-buffer-5"></div>
    <div class="row row-eq-height">
      <div class="col-sm-1"></div>
      <div class="col-sm-2 tall-col">
        <div class="well">
          <h2>Current Weather</h2>
          <img id="weather-icon" :src="getImgUrl('Clear.png')" width="100" height="100">
          <h3>{{localCity}}</h3>
          <h2>{{localTemp}} F</h2>
          <h4>{{conditions}}</h4>
        </div>
      </div>
      <div class="col-sm-8 tall-col">
        <div class="row">
          <div class="col-sm-12">
            <div class="well">
              <h2 class="section-title">Quote of the Day:</h2>
              <p class="section-content">{{quote}}</p>
              <p id="q-author">- {{qauthor}}</p>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="well">
              <h2 class="section-title">Goal of the Day:</h2>
              <p class="section-content">{{gotd}}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div><!--end req wrapping div-->
</template>
<script>

export default {
  data () {
    return {
      username: this.getCookie('username'),
      quote: '',
      qauthor: '',
      localCity: 'Springfield',
      localTemp: '',
      conditions: '',
      gotd: this.getCookie('goal')
    }
  },
  mounted: function () {
    this.getQuote()
    this.getCurrentTemp()
  },
  methods: {
    // Access quote API and get the 'Quote Of The Day'
    getQuote: function () {
      // Quote category set as 'inspire'
      let url = 'http://quotes.rest/qod.json?category=inspire'
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {
        // Set the quote and author
        this.quote = json.contents.quotes[0].quote
        this.qauthor = json.contents.quotes[0].author
      }.bind(this)).catch(function (reason) {
        console.log(reason)
      })
    },

    // Access weather API and get current weather info
    getCurrentTemp: function () {
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=65808,us' +
                '&units=imperial' + // Unit default is Kelvin
                '&appid=0c2cf2d862aed4851bd89af90698bc92'
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {
        // Set current temperature and conditions
        this.localTemp = json.main.temp + String.fromCharCode(176)
        this.conditions = json.weather[0].main
        // Updates weather icon according to current conditions
        document.getElementById('weather-icon').src = this.getImgUrl(this.conditions + '.png')
      }.bind(this)).catch(function (reason) {
        console.log(reason)
      })
    },

    setCookie: function (cname, cvalue, cname2, cvalue2, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
      document.cookie = cname2 + '=' + cvalue2 + ';'
      this.username = cvalue
      this.gotd = cvalue2
    },

    getCookie: function (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },

    checkCookie: function () {
      var user = this.getCookie('username')
      var goal = this.getCookie('goal')
      if (user !== '') {
        alert('Welcome again ' + user)
      } else {
        user = prompt('Please enter your name:', '')
        goal = prompt('Please enter your Goal for today:', '')
        if (user !== '' && user !== null && goal !== '') {
          this.setCookie('username', user, 'goal', goal, 1)
        }
      }
    },
    deleteCookie: function () {
      document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'goal=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    },

    getImgUrl: function (img) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + img)
    }
  }
}
</script>
<style>
    #q-author {
      text-align: right;
      margin-right: 10em;
      font-size: 1.5em;
    }

    .section-content {
      font-size: 2em;
    }

    .section-title {
      margin-top: 0em;
      margin-left: 4em;
      text-align: left;
    }

    .row-eq-height {
      flex-direction:row;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display:         flex;
    }

    /* Give some headroom to containers. Should be moved to global css*/
    .vertical-buffer-3 {margin-top: 2.5em;}
    .vertical-buffer-5 {margin-top: 2.5em;}

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

    #under-header {
      background-image: url('../assets/demo-background.png');
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
</style>
