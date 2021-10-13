<template>
  <div id="app">
    <div id="nav">
      <nav-bar class="pt-2 pl-6 pr-6"/>
    </div>
    <div class="m-2 ml-3 mr-3 is-divider"></div>
    <router-view/>
    <footer class="footer">
      <div class="m-2 ml-3 mr-3 is-divider"></div>
      <div class="pl-6 pt-3 pr-6">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="lego-text--caption">© Le-go</p>
            </div>
          </div>
          <div class="level-center">
            <p class="lego-text lego-text--caption lego-text--caption--light">Eslogan</p>
          </div>
          <div class="level-right">
            <div class="level-item">
              LOGO
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #18A0FB;
    }
  }
}
</style>
