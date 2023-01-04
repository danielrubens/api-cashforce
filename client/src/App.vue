<template>
  <div id="app">
    <Logo></Logo>
    <Invoice></Invoice>
    <div class="frame">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Invoice from './components/Invoice'

export default {
  name: 'App',
  components: {
    Logo,
    Invoice
  }
}
</script>

<style>
  #app {
    display:grid;
    grid-template-areas:
            "logo header"
            "aside content";
    grid-template-columns: 288px 1fr;
    grid-template-rows: 80px 1fr;
  }
  .frame {
    grid-area: content;
  }

</style>
