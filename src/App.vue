<template>
  <div id="app">
    <div class="g-hd">
       <router-link to="/"> <div class="m-logo f-fl"></div></router-link>
        <div class="m-list f-fr">
          <ul>
            <li hidden>
              <input type="text">
              <img class="m-search" src="./assets/search.png" alt="">
            </li>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to='/frontend'>前端</router-link>
            </li>
            <li>
             <router-link to="/python">python</router-link>
            </li>
            <li>
              <router-link to="/essay">随笔</router-link>
            </li>
          </ul>
      </div>
    </div>
    <div class="g-bd">
      <router-view/>
    </div>
    <div class="g-ft">Powered by Chen ( UI by Huang ) 皖ICP备17002208号</div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="scss">
  @import "./../static/sass/blogui.scss";
</style>
