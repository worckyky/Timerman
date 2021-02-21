<template>
  <div class="LigaContainer">
    <img :src="require(`@/assets/images/liga/${image}`)"
         :alt="alt"
         class="LigaContainer__image"
    >
    <div class="LigaContainer__text">
      <p class="LigaContainer__text_title">
        <slot name="title"></slot>
      </p>
      <h3 class="LigaContainer__text_price">
        <slot name="price"></slot>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    alt: String
  }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.LigaContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    max-width: 180px;
    margin-bottom: 24px;
    @media (max-width: 992px) {
      max-width: 80%;
    }
    @media (max-width: 756px) {
      max-width: 320px;
    }
    @media (max-width: 480px) {
      max-width: 240px;
    }
  }
  &__text {
    color: $dark;
    text-align: center;
    background-color: $gray600;
    width: 100%;
    padding: 32px 24px;
    &_title {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 24px;
      min-height: 64px;
    }
    //@media (max-width: 992px) {
    //  font-size: 16px;
    //  line-height: 24px;
    //}
    //@media (max-width: 756px) {
    //  font-size: 20px;
    //  line-height: 26px;
    //}
  }
}

</style>