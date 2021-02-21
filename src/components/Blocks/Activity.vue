<template>
  <div class="Activity">
    <div class="Activity__container">
      <div class="Activity__content">
        <h2 class="Activity__title">
          Календарь Мероприятий
        </h2>
      </div>
      <div class="Activity__actions">
        <Carousel
            :navigation-enabled="sliderConfig.navigationEnabled"
            :pagination-enabled="sliderConfig.paginationEnabled"
            :navigation-next-label="sliderConfig.nextLabel"
            :navigation-prev-label="sliderConfig.prevLabel"
            :autoplay="sliderConfig.autoplay"
            :per-page="sliderConfig.perPage"
            :autoplay-timeout="sliderConfig.autoplayTimeout"
            :loop="sliderConfig.loop"
            :speed="sliderConfig.speed"
            :autoplay-hover-pause="sliderConfig.autoplayHoverPause"
            :perPageCustom="[[320, 1], [480, 3]]"
        >
          <Slide>
            <div class="Activity__block">
              <div class="Activity__top">
                <div class="privet">
                  <span>03 октября, вс</span>
                  <span>●</span>
                  <span>Казань</span>
                </div>
                <div class="Activity__head">
                  <h3>Казанский национальный полумарафон 2021</h3>
                  <span class="Activity__tag">Забег</span>
                </div>
              </div>
              <div class="Activity__bottom">
                <div class="Activity__distance">
                  <span>Забег TIMERMANKIDS</span>
                  <span>3 км,</span>
                  <span>10 км,</span>
                  <span>21.1 км,</span>
                </div>
                <div class="Activity__button">
                  <button>Регистрация</button>
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Activity {
  &__container {
    @include layout;
  }

  &__title {
    @include title;
  }

  &__block {
    height: 364px;
    width: 364px;
    border: 1px solid red;
    padding: 24px;
    position: relative;
  }
  &__top, &__bottom {
    max-height: 120px;
    position: absolute;
    padding-right: 24px;
  }
  &__top {
    top: 24px;
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

  &__head {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>


<script>

import {Carousel, Slide} from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      sliderConfig: {
        autoplay: true,
        perPage: 3,
        autoplayTimeout: 4000,
        loop: true,
        direction: 'forward',
        paginationPosition: ['overlay', 'bottom-overlay'],
        speed: 1000,
        autoplayHoverPause: false,
        navigationEnabled: true,
        paginationEnabled: false,
        nextLabel: '<div class="slide__label slide__label-right"></div>',
        prevLabel: '<div class="slide__label slide__label-left"></div>',
      },
    }
  }
}
</script>

