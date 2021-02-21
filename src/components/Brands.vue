<template>
  <div class="brands">
    <FloatingDecoration class="brands__float-right"/>
    <div class="brands__container">
      <div class="brands__content">
        <h2 class="brands__title">
          С нами участвуют
        </h2>
      </div>
      <div class="brands__slider">
        <div class="brands__slider-container">
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
            <Slide v-for="(slide , i) in brand" :key="i">
              <div class="brands__slider-block">
                <a target="_blank" :href="'//' + slide.link">
                  <img :src="require(`@/assets/images/brands/${slide.logo}`)" :alt="slide.alt"
                  >
                </a>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <FloatingDecoration class="brands__float-left"/>
  </div>
</template>
<script>
import {Carousel, Slide} from 'vue-carousel'
import FloatingDecoration from "@/components/FloatingDecoration";

export default {
  components: {
    FloatingDecoration,
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
      brand: [
        {
          logo: 'akbars.svg',
          link: 'www.akbars.ru',
          alt: 'Акбарс'
        },
        {
          logo: 'akbars.svg',
          link: 'www.akbars.ru',
          alt: 'Акбарс'
        },
        {
          logo: 'akbars.svg',
          link: 'www.akbars.ru',
          alt: 'Акбарс'
        },
        {
          logo: 'akbars.svg',
          link: 'www.akbars.ru',
          alt: 'Акбарс'
        }
      ]
    }
  },

}

</script>
<style lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.slide {
  &__label {
    width: 48px;
    height: 48px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: ease-in-out 0.3s;
    &-right {
      background-image: url('../assets/images/brands/slider/nav-right.svg');
      &:hover {
        transform: translateX(10px);
      }
    }

    &-left {
      background-image: url('../assets/images/brands/slider/nav-left.svg');
      &:hover {
        transform: translateX(-10px);
      }
    }

  }

}

.brands {
  background-color: $gray600;
  position: relative;
  padding: 60px 0;
  overflow: hidden;
  z-index: 1;
  &__float {
    &-right {
      left: -250px;
      bottom: -250px;
    }
    &-left {
      right: -230px;
      top: -280px;
    }
  }
  @media (max-width: 480px) {
    padding: 16px 0;
  }
  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 50px;
    background-color: $white;
    top: 0;
    right: 0;
    @media (max-width: 992px) {
      display: none;
    }
  }

  &__container {
    @include layout;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
    @media (max-width: 992px) {
      grid-template-rows: 100px 1fr;
      grid-row-gap: 0;
    }

  }

  &__content {
    display: flex;
    height: 100%;
    align-items: center;
    grid-column: 1 / 4;
    @media (max-width: 992px) {
      grid-row: 1;
      grid-column: 1 / 13;
      justify-content: center;
      text-align: center;
    }
  }

  &__title {
    @include title;
  }

  &__slider {
    grid-column: 4 / 13;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    @media (max-width: 992px) {
      grid-row: 2;
      grid-column: 1 / 13;
    }

    &-container {
      width: 70%;
      @media (max-width: 992px) {
      }
    }

    &-block {
      display: flex;
      justify-content: center;

      img {
        width: 160px;
      }
    }
  }
}

</style>