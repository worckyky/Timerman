<template>
  <div class="Calculator">
    <div class="Calculator__container">
      <div class="Calculator__count">
        <h2 class="Calculator__title">Расчет стоимости Участия</h2>
        <div class="Calculator__content">
          <div class="Calculator__content-block Calculator__one">
            <p>
              <span>0.1</span>
              Выбирите мероприятие
            </p>
            <select-input v-model="event" :options="list" @input="changeInfo"/>
          </div>
          <div class="Calculator__content-block Calculator__two">
            <p>
              <span>0.2</span>
              Выбирите лигу
            </p>
            <tabs-container :variants="liga" @selectedTab="additionalPrice" :clear-data="clearData"/>
          </div>
          <div class="Calculator__content-block Calculator__three">
            <p>
              <span>0.3</span>
              Укажите дистанцию и количество человек
            </p>
            <participants-container :prop-distance="showDistance" @pushSum="pushSum" :clear-data="clearData"/>
          </div>
        </div>
      </div>
      <div class="Calculator__result">
        <div class="Calculator__scroll">
          <div class="Calculator__result-sum">
            <h2>Сумма:</h2>
            <span>{{ sum + ' ₽' }}</span>
          </div>
          <div class="Calculator__result-info">
            <h2>Данные подсчета:</h2>
            <div class="Calculator__result-data">
              <p>Мероприятие:<span>{{ info === null ? `Не выбрано` : info.name }}</span></p>
              <p>Лига:<span>{{ ligaPrice === 0 ? `Не выбрана` : showLiga }}</span></p>
              <p>Дистанции: <span v-if="memberDistances.length === 0">Нет дистанций</span> <span
                  v-for="(m, i) of memberDistances" :key="i">{{ m + ',' }}</span></p>
              <p>Общее количество участников:<span>{{ countOfMembers === 0 ? `Нет участников` : countOfMembers }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import calculatorData from "@/assets/content/calculatorData";
import SelectInput from "@/components/SelectInput";
import TabsContainer from "@/components/TabsContainer";
import ParticipantsContainer from "@/components/ParticipantsContainer";

export default {
  components: {ParticipantsContainer, TabsContainer, SelectInput},
  data() {
    return {
      list: calculatorData(true),
      event: 1,
      liga: [{
        img: 'A.svg',
        price: 20000
      }, {
        img: 'B.svg',
        price: 10000
      }, {
        img: 'C.svg',
        price: 5000
      }],
      ligaPrice: 0,
      distanceSum: 0,
      countOfMembers: 0,
      memberDistances: [],
      info: null,
      sum: 0,
      clearData: true
    }
  },
  methods: {
    changeInfo() {
      this.info = calculatorData(false, +this.event)
      this.sum = 0
      this.ligaPrice = 0
      this.distanceSum = 0
      this.countOfMembers = 0
      this.memberDistances = []
      this.clearData = !this.clearData
    },
    additionalPrice(ctx) {
      this.ligaPrice = ctx
    },
    pushSum(ctx) {
      this.distanceSum = ctx[0]
      this.countOfMembers = ctx[1]
      this.memberDistances = [...new Set(ctx[2])]
    },
    changeValue() {
      this.sum = this.ligaPrice + this.distanceSum
    }
  },
  watch: {
    ligaPrice() {
      this.changeValue()
    },
    distanceSum() {
      this.changeValue()
    }
  },
  computed: {
    showDistance() {
      return calculatorData(false, +this.event).distance
    },
    showLiga() {
      const data = this.liga.find(elem => elem.price === this.ligaPrice).img
      return data.split('.svg')[0]
    }
  },
  mounted() {
    this.info = calculatorData(false, +this.event)
  }
}
</script>


<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Calculator {
  padding: 80px 0;
  @media (max-width: 480px) {
    padding: 32px 0;
  }
  &__container {
    @include layout;
    display: grid;
    grid-template-columns: 558px 1fr;
    grid-column-gap: 24px;
    @media (max-width: 1060px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 756px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    @include title;
    margin-bottom: 80px;
    @media (max-width: 480px) {
      margin-bottom: 48px;
    }
  }

  &__three {
    margin-bottom: 0 !important;
  }

  &__content {
    &-block {
      margin-bottom: 56px;
      @media (max-width: 480px) {
        margin-bottom: 24px;
      }
      p, span {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 32px;
        @media (max-width: 480px) {
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 16px;
        }
      }

      span {
        color: $red;
      }
    }
  }
  &__scroll {
    position: sticky;
    top: 32px;
  }
  &__result {
    position: relative;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 18px;
      line-height: 24px;
      text-transform: uppercase;
      color: $dark;
    }


    &-sum {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      span {
        font-size: 24px;
        line-height: 24px;
        color: $red;
        font-weight: 700;
        text-align: right;
      }
    }

    &-info, &-sum {
      padding: 32px;
      background-color: $gray600;
      height: inherit;
      @media (max-width: 480px) {
        padding: 24px;
      }
    }

    &-data {
      margin-top: 56px;
      font-size: 20px;
      line-height: 32px;
      @media (max-width: 1060px) {
        font-size: 16px;
        line-height: 24px;
      }
      p {
        margin-bottom: 24px;
        color: $dark;
      }

      span {
        color: $red;
        padding-left: 16px;
        @media (max-width: 1060px) {
          padding-left: 8px;
        }
      }
    }
  }

}

</style>