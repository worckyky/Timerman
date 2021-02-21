<template>
  <div class="Activity">
    <div class="Activity__float"></div>
    <div class="Activity__container">
      <div class="Activity__content">
        <h2 class="Activity__title">
          Календарь Мероприятий
        </h2>
      </div>
      <div class="Activity__actions">
        <div class="Activity__navigation">
          <div class="slide__label slide__label-left" @click="prevSlide"></div>
          <div class="slide__label slide__label-right" @click="nextSlide"></div>
        </div>
        <Carousel
            :navigation-enabled="sliderConfig.navigationEnabled"
            :pagination-enabled="sliderConfig.paginationEnabled"
            :autoplay="sliderConfig.autoplay"
            :per-page="sliderConfig.perPage"
            :autoplay-timeout="sliderConfig.autoplayTimeout"
            :loop="sliderConfig.loop"
            :speed="sliderConfig.speed"
            :autoplay-hover-pause="sliderConfig.autoplayHoverPause"
            :perPageCustom="[[320, 1], [756, 2], [1024, 3]]"
            ref="carousel"
            class="Activity__carousel"
        >
          <Slide v-for="(action, i) of actions" :key="i">
            <Action
                :title="action.title"
                :date="action.date"
                :tag="action.tag"
                :b-g="action.BG"
                :distance="action.distance"
                :reg-link="action.regLink"
                :more-link="action.moreLink"
            />
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import {Carousel , Slide} from 'vue-carousel'
import Action from "@/components/Action";

export default {
  components: {
    Action,
    Carousel,
    Slide
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
        paginationEnabled: false,

      },
      actions: [
        {
          title: 'Казанский национальный полумарафон 2021',
          BG: '1.jpeg',
          tag: 'Забег',
          date: {
            day: "03 октября, вс",
            district: "Казань"
          },
          distance: ['10 км,', '21.1 км,', '3 км,', 'Забег TIMERMANKIDS'],
          regLink: '#',
          moreLink: '#'
        },
        {
          title: 'Казанский национальный полумарафон 2021',
          BG: '1.jpeg',
          tag: 'Забег',
          date: {
            day: "03 октября, вс",
            district: "Казань"
          },
          distance: ['10 км,', '21.1 км,', '3 км,', 'Забег TIMERMANKIDS'],
          regLink: '#',
          moreLink: '#'
        },
        {
          title: 'Казанский национальный полумарафон 2021',
          BG: '1.jpeg',
          tag: 'Забег',
          date: {
            day: "03 октября, вс",
            district: "Казань"
          },
          distance: ['10 км,', '21.1 км,', '3 км,', 'Забег TIMERMANKIDS'],
          regLink: '#',
          moreLink: '#'
        },
        {
          title: 'Казанский национальный полумарафон 2021',
          BG: '1.jpeg',
          tag: 'Забег',
          date: {
            day: "03 октября, вс",
            district: "Казань"
          },
          distance: ['10 км,', '21.1 км,', '3 км,', 'Забег TIMERMANKIDS'],
          regLink: '#',
          moreLink: '#'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  },
}
</script>


<style lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Activity {
  padding: 132px 0;
  position: relative;
  @media (max-width: 992px) {
    padding: 56px 0;
  }
  &__float {
    position: absolute;
    right: 0;
    width: 50%;
    height: 400px;
    background-color: $gray600;
    overflow: hidden;
    z-index: -1;
    &::after {
      content: '';
      background: url("../../assets/images/TimerPattern.svg");
      position: absolute;
      width: 580px;
      height: 466px;
      display: block;
      top: 50px;
      left: 80px;
    }
    @media (max-width: 992px) {
      opacity: 0.4;
    }
  }
  &__container {
    @include layout;
  }
  &__actions {
    display: flex;
    flex-direction: column;
  }
  &__title {
    @include title;
    margin-bottom: 56px;
    @media (max-width: 992px) {
      text-align: center;
      margin-bottom: 32px;
    }
  }
  &__navigation {
    display: flex;
    margin-bottom: 40px;
    width: 140px;
    justify-content: space-between;
    order: 1;
    @media (max-width: 992px) {
      width: 100%;
      margin-bottom: 24px;
    }
    @media (max-width: 480px) {
      width: 100%;
      order: 2;
    }
  }
  &__carousel {
    order: 2;
    @media (max-width: 480px) {
      margin-bottom: 24px;
      order: 1;
    }
  }
}

.slide {
  &__label {
    width: 48px;
    height: 48px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    &-right {
      background-image: url('../../assets/images/brands/slider/nav-right.svg');
      &:hover {
        transform: translateX(10px);
      }
    }

    &-left {
      background-image: url('../../assets/images/brands/slider/nav-left.svg');
      &:hover {
        transform: translateX(-10px);
      }
    }

  }

}

</style>

