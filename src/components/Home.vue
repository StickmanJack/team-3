<template>
  <div> <!--required wrapping div-->
    <div class="vertical-buffer-5"></div>
    <h1>Good Afternoon {{username}}!</h1>
    <input v-model.lazy="username" placeholder="name">
    <input v-model.lazy="gotd" placeholder="goal">
    <input v-model="zip" placeholder="zip code"><br/><br/>
    <button v-on:click="checkCookie ()"> Fetch Weather </button>
    <button v-on:click="deleteCookie ()"> Reset </button>
    <div class="vertical-buffer-5"></div>
    <div class="row row-eq-height">
      <div class="col-sm-1"></div>
      <div class="col-sm-2 tall-col">
        <div class="well">
          <h2>Current Weather</h2>
          <img id="weather-icon" :src="getImgUrl('blank.png')" width="100" height="100">
          <h3>{{localCity}}</h3>
          <h3>{{localTemp}}</h3>
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
      localCity: '',
      localTemp: '',
      conditions: '',
      gotd: this.getCookie('goal'),
      zip: this.getCookie('zip')
    }
  },
  mounted: function () {
    this.getQuote()
    // this.getCurrentConditions()
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
    getCurrentConditions: function () {
      this.localCity = 'Loading...'
      this.localTemp = 'Loading...'
      this.conditions = 'Loading...'
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.zip + ',us' +
                '&units=imperial' + // Unit default is Kelvin
                '&appid=0c2cf2d862aed4851bd89af90698bc92'
      fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {
        // Set current temperature and conditions
        this.localTemp = json.main.temp + String.fromCharCode(176) + ' F'
        this.conditions = json.weather[0].main
        this.localCity = json.name
        // Updates weather icon according to current conditions
        document.getElementById('weather-icon').src = this.getImgUrl(this.conditions + '.png')
      }.bind(this)).catch(function (reason) {
        console.log(reason)
      })
    },

    setCookie: function (cname, cvalue, cname2, cvalue2, cname3, cvalue3, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toGMTString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
      document.cookie = cname2 + '=' + cvalue2 + ';'
      document.cookie = cname3 + '=' + cvalue3 + ';'
      this.username = cvalue
      this.gotd = cvalue2
      this.zip = cvalue3
      this.getCurrentConditions()
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
      var zip = this.getCookie('zip')
      user = this.username
      goal = this.gotd
      zip = this.zip
      if (user !== '' && user !== null && goal !== '' && zip !== '') {
        this.setCookie('username', user, 'goal', goal, 'zip', zip, 1)
      }
    },
    deleteCookie: function () {
      document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'goal=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'zip=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      this.username = ''
      this.gotd = ''
      this.zip = ''
      this.localCity = ''
      this.localTemp = ''
      this.conditions = ''
      document.getElementById('weather-icon').src = this.getImgUrl('blank.png')
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
