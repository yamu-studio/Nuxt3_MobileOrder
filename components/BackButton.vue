<template lang="pug">
NuxtLink(:to="'/'")
  button.button.is-rounded#backBtn 
    span.icon.is-large
      i.fa-lg.far.fa-less-than
</template>

<style lang="scss" scoped>
#backBtn {
  position: absolute;
  top: 8px;
  left: 12px;

  z-index: 1;
}
</style>
