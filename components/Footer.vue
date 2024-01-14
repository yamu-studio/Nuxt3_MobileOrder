<template lang="pug">
footer.Footer 
  nav.navbar
    .content-row-space-around
      div
        .button.is-white.is-rounded.is-large.is-responsive
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 食事
      div
        .button.is-white.is-rounded.is-large.is-responsive
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 飲み物
      div
        .button.is-white.is-rounded.is-large.is-responsive
          span.icon.is-large
            i.fa-2x.fas.fa-video
        p 伝票/会計
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Footer {
  position: relative;
  // bottom: 0;
  // left: 0px;
  // z-index: 4;
  width: 100%;
  min-height: 80px;
  // background-color: black;
  // color: white;
  // font-size: 1rem;
  // h4 {
  //   // position: relative;
  //   // top: 15px;
  //   // width: 100vw;
  //   text-align: center;
  //   // padding: 4px;
  // }
}
</style>
