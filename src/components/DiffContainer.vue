<template>
  <div class="DiffContainer">
    <img :src="require(`@/assets/images/difference/${image}`)"
         :alt="alt"
         class="DiffContainer__image"
    >
    <p class="DiffContainer__paragraph">
      <slot/>
    </p>
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

.DiffContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    max-width: 200px;
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
  &__paragraph {
    margin-top: 24px;
    font-size: 20px;
    line-height: 28px;
    color: $dark;
    text-align: center;
    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-width: 756px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
}

</style>