<template>
      <div class="Action__block"
           :style="{
        'background-image': `url(${require(`@/assets/images/activity/${BG}`)})`,
      }"
      >
        <div class="Action__top">
          <div>
            <span>{{date.day}}</span>
            <span>●</span>
            <span>{{date.district}}</span>
          </div>
          <div class="Action__head">
            <h3>{{ title }}</h3>
            <div class="Action__tag">{{tag}}</div>
          </div>
        </div>
        <div class="Action__bottom">
          <div class="Action__distance" >
            <span v-for="(d, i) of distance" :key="i" >{{d}} </span>
          </div>
          <div class="Action__button">
            <Button size="Small" class="Action__button-reg">Регистрация</Button>
            <Button size="Small">Соревнования</Button>
          </div>
        </div>
        <div class="Action__fade"></div>
      </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
  props: {
    title: String,
    BG: String,
    tag: String,
    date: {
      day: String,
      district: String
    },
    distance: Array[String],
    regLink: String,
    moreLink: String
  },
}
</script>


<style lang="scss" >
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Action {
  &__container {
    @include layout;
  }

  &__title {
    @include title;
  }
  &__fade {
    width: 100%;
    height: 100%;
    background: $dark;
    top: 0;
    right: 0;
    display: block;
    position: absolute;
    opacity: 0.5;
    z-index: 0;
  }
  &__block {
    color: $white;
    height: 364px;
    margin: 0 8px;
    padding: 24px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 400px) {
      padding: 16px;
    }
  }
  &__head {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__top, &__bottom {
    max-height: 120px;
    position: absolute;
    padding-right: 24px;
    z-index: 10;
  }
  &__top {
    top: 24px;
    span {
      margin-right: 8px;
    }
  }
  &__bottom {
    bottom: 24px
  ;
  }
  &__date {
    font-size: 14px;
    line-height: 14;
    height: fit-content;
  }
  &__tag {
    margin-left: 8px;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    padding: 4px 8px;
    font-weight: 700;
    background-color: $green;
    height: max-content;
  }
  &__distance {
    display: flex;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    span{
      margin-right: 8px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
      line-height: 12px;
    }
  }
  &__button {
    display: flex;
    &-reg {
      margin-right: 16px;
    }
  }
}
</style>

