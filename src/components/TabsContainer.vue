<template>
  <div class="TabsContainer" >
    <div class="TabsContainer__block"
         ref="tabs"
         :class="activeStyle(elem.price)"
         v-for="(elem , i) of variants" :key="i"
         @click="selectedTab(elem.price)">
      <img :src="require(`@/assets/images/liga/${elem.img}`)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variants: Array[{
      price: Number,
      img: String,
    }],
    clearData: Boolean
  },
  data() {
    return {
      selected: 0,
    }
  },
  methods: {
    selectedTab(price) {
      this.selected = price
      this.$emit('selectedTab',price)
    },
    activeStyle(number) {
      if (this.selected === number) {
        return 'TabsContainer__block_active'
      } else {
        return null
      }
    }
  },
  watch: {
    clearData() {
      this.selected = 0
    }
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";
.TabsContainer {
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 480px) {
    grid-gap: 8px;
    grid-template-columns: repeat(3, auto);
  }
  &__block {
    height: 170px;
    border: 1px solid $gray600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease-in-out 0.3s;
    @media (max-width: 1060px) {
      height: 120px;
    }
    @media (max-width: 480px) {
      height: 100px;
    }
    &:hover {
      background-color: rgba(200, 20, 28, 0.1);
    }
    img {
      width: 100px;
      filter: grayscale(1);
      @media (max-width: 1060px) {
        width: 60px;
      }
      @media (max-width: 480px) {
        width: 40px;
      }
    }
    &_active {
      border: 1px solid $red;
      img {
        filter: none;
      }
    }
  }
}
</style>