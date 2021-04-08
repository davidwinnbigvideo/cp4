<template>
  <div id="app">
    <div class="header">
      <div class="topnav">
        <router-link to="/admin" class="active">Play</router-link>
        <router-link to="/">Score</router-link>
      </div>
      <!-- <router-link to="/">
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Noun_Project_house_icon_475319_cc.svg" alt="File:Noun Project house icon 475319 cc.svg">
        </div>
      </router-link> -->
      
      <!-- <router-link to="/admin">
        <div class="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Chess_uat45.svg">
        </div>
      </router-link> -->
      <div class="filename">
        <!-- <h1>Winn Games</h1> -->
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <!-- <router-link to="/admin">Admin</router-link> -->
      <br>
      <a href="https://github.com/davidwinnbigvideo/cp4">github</a>
    </div>
  </div>
</template>

<script>
// export default {
//   vuetify: new Vuetify(),
// }
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-image: 'src="https://live.staticflickr.com/4151/5183055705_6e887b9aa6_b.jpg"';
  /* background: #fff; */
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 0px 25px 0px 0px;
  background-color: red;
  color: white;
  text-align: right;
}

.filename {
  margin-top: 5px;
  text-align: right;
}

.filename h1 {
  font-size: 30px;
  text-align: right;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #000000;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer a {
  color: rgb(255, 255, 255);
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

.topnav {
  overflow: hidden;
  background-color: red;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #000000;
  color: white;
}
</style>
