<template>
  <div id="app">
    <div id="nav">
      <nav-bar class="pt-2 pl-6 pr-6"/>
    </div>
    <div class="m-2 ml-3 mr-3 is-divider"></div>
    <router-view/>
    <footer class="footer">
      <div class="pl-6 pr-6">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              © Le-go Eslogan
            </div>
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
