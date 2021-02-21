<template id="main">
  <button class="Button" :class="newStyle" @click="extraClick">
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    addStyle: String
  },
  computed: {
    newStyle() {
      if (this.addStyle === 'Field') {
        return 'Button_red'
      } else if (this.addStyle === 'Outline') {
        return 'Button_outline'
      }
      return null
    }
  },
  methods: {
    extraClick() {
      this.$emit('extraClick')
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "~@/assets/styles/_variables.scss";
    .Button {
      font-size: 16px;
      line-height: 16px;
      padding: 14px 20px;
      text-transform: uppercase;
      border: 1px;
      cursor: pointer;
      font-weight: 500;
      width: fit-content;
      @media (max-width: 480px) {
        padding: 12px;
        font-size: 14px;
        line-height: 14px;
      }
    }
    .Button_red {
      background-color: $red;
      border: 1px solid $red;
      color: $white;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: transparent;
        color: $red;
      }
    }
    .Button_outline {
      background-color: transparent;
      border: 1px solid $red;
      color: $red;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: $red;
        opacity: 0.8;
        color: $white;
      }
    }
</style>