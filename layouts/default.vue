<template lang="pug">
#app
  Header.header
  main.page-content
    slot 
  Footer.footer.p-0
</template>
<script setup lang="ts"></script>

<style lang="scss">
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.page-content {
  position: relative;
  padding-top: 100px;
  padding-bottom: 160px;

  color: white;
  background-color: rgb(46, 38, 38);
}
.header {
  position: fixed;
}
.footer {
  position: fixed;
  bottom: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  -ms-overflow-style: none;
  /* Firefox 対応 */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
