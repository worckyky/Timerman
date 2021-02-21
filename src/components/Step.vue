<template>
  <div class="Step">
    <div class="Step__content">
      <div class="Step__count">
        {{count}}
      </div>
      <div class="Step__description">
        <slot/>
        <img v-if="last" src="../assets/images/steps/medal.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    count: Number,
    last: Boolean
  }
}
</script>


<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";
.Step {
  height: 140px;
  width: 50%;
  margin-bottom: 56px;
  z-index: 0;
  &:nth-child(2n) {
    margin-top: 56px;
  }
  @media (max-width: 756px) {
    width: 100%;
    &:nth-child(2n) {
      margin-top: 0;
    }
  }
  @media (max-width: 480px) {
    height: auto;
    margin-bottom: 24px;
  }
  &__content {
    display: flex;
    justify-content: center;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }
  }
  &__count {
    height: 120px;
    width: 120px;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: $red;
    font-size: 48px;
    line-height: 48px;
    position: relative;
    &::after {
      content: '';
      height: 120px;
      width: 120px;
      position: absolute;
      top: 20px;
      left: 20px;
      border: 1px solid $red;
      z-index: -1;
    }
  }
  &__description {
    font-size: 20px;
    line-height: 28px;
    color: $white;
    display: flex;
    max-width: 260px;
    font-weight: 400;
    padding-left: 40px;
    flex-direction: column;
    img {
      width: 56px;
      margin-top: 24px;
    }
    @media (max-width: 480px) {
      margin-top: 32px;
      text-align: center;
      padding-left: 0;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
    }
  }

}
</style>