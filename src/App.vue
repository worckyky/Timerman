<template>
  <div id="app">
    <Main/>
    <Questions/>
    <Brands/>
    <Activity/>
    <Difference/>
    <Steps/>
    <Liga/>
    <Contacts/>
  </div>
</template>

<script>
import Main from "@/components/Blocks/Main";
import Questions from "@/components/Blocks/Questions";
import Brands from "@/components/Brands";
import Activity from "@/components/Blocks/Activity";
import Difference from "@/components/Blocks/Difference";
import Steps from "@/components/Blocks/Steps";
import Liga from "@/components/Blocks/Liga";
import Contacts from "@/components/Blocks/Contacts";
export default {
  name: 'App',
  components: {Contacts, Steps, Difference, Activity, Brands, Questions, Main, Liga},
}
</script>

<style lang="scss">
@import "assets/styles/mixins";
#app {
  font-family: Roboto, sans-serif;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

</style>
