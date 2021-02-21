<template>
  <div class="Steps">
    <div class="Steps__container">
      <h2 class="Steps__title">
        Шаги для участия
      </h2>
      <div class="Steps__section">
        <Step v-for="(s, i) of steps"
              :key="i"
              :count="i + 1"
              :last="s.last"
        >
          <span v-if="s.text.includes('corp@timerman.org')">Отправить бланк на почту <a href="mailto:corp@timerman.org">corp@timerman.org</a></span>
          <span v-else>{{s.text}}</span>
        </Step>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step";
export default {
  components: {Step},
  data() {
    return {
      steps: [
        {
          text: 'Cкачать бланк на сайте\n' +
              'и заполнить',
          last: false
        },
        {
          text: `Отправить бланк на почту corp@timerman.org`,
          last: false
        },
        {
          text: 'Отправить карту партнера для заключения договора',
          last: false
        },
        {
          text: 'Оплатить участие по счету',
          last: false
        },
        {
          text: 'Cделать всем участникам мед. справки',
          last: false
        },
        {
          text: 'Скачать расписку на сайте и заполнить для каждого участника',
          last: false
        },
        {
          text: 'Принять участие и ждать результатов',
          last: true
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";
.Steps {
  padding: 100px 0;
  background: url("../../assets/images/steps/stepsBG.jpg") , no-repeat, center;
  background-size: cover;
  @media (max-width: 480px) {
    padding: 56px 0;
  }
  &__container {
    @include layout;
  }
  &__title {
    @include title;
    color: $white;
    text-align: center;
    margin-bottom: 56px;
  }
  &__section {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      color: $white;
      position: relative;
      &::after{
        content: '';
        width: 100%;
        height: 2px;
        display: block;
        position: absolute;
        background-color: $red;
        bottom: -5px;
        right: 0;
        transition: ease-in-out 0.2s;
      }
      &:hover::after {
        width: 0;
      }
    }
  }
}
</style>