<template>
  <ul class="ListColumn">
    <li
        class="ListColumn__elem"
        v-for="(el, i) of list"
        :key="i"
    >
      {{el}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array[String]
  }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";
  .ListColumn {
    max-width: 260px;
    &__elem {
      font-size: 14px;
      line-height: 22px;
      list-style:none;
      position: relative;
      padding-left:24px;
      margin-bottom: 16px;
      &::before {
        content: '';
        display: block;
        border-radius: 50%;
        background-color: $red;
        height: 12px;
        width: 12px;
        position: absolute;
        left: 0;
        top: 5px;
      }
    }
  }
</style>