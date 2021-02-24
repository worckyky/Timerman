<template>
  <div class="Difference">
    <div class="Difference__container">
      <h2 class="Difference__title">
        отличия от индивидуального участия
      </h2>
      <div class="Difference__block">
        <div class="Difference__content Difference__content_bad">
          <DiffContainer image="1.png">
            Регистрируешься на сайте и оплачиваешь участие
          </DiffContainer>
          <img src="@/assets/images/brands/slider/nav-right.svg" alt="">
          <DiffContainer image="2.png">
            Стоишь в очереди и забираешь стартовый пакет на Экспо сам
          </DiffContainer>
          <img src="@/assets/images/brands/slider/nav-right.svg" alt="">
          <DiffContainer image="3.png">
            Бежишь один :(
          </DiffContainer>
        </div>
        <div class="Difference__content Difference__content_good">
          <DiffContainer image="4.png">
            Заполняешь форму с коллегами и не платишь
          </DiffContainer>
          <img src="@/assets/images/brands/slider/nav-right.svg" alt="">
          <DiffContainer image="5.png">
            Кто-то один забирает все стартовые пакеты для коллег вне очереди
          </DiffContainer>
          <img src="@/assets/images/brands/slider/nav-right.svg" alt="">
          <DiffContainer image="6.png">
            Бежишь командой с поддержкой
          </DiffContainer>
        </div>
      </div>
      <Button>Скачать бланк регистрации</Button>
    </div>
  </div>
</template>
<script>
import DiffContainer from "@/components/DiffContainer";
import Button from "@/components/Button";

export default {
  components: {Button, DiffContainer}
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Difference {
  padding: 100px 0;
  background: linear-gradient(180deg, #FAFAFA 26.9%, rgba(255, 255, 255, 0) 100%);
  overflow: hidden;

  &__float {
    &-right {
      left: 0;
      top: 0;
    }

    &-left {
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 480px) {
    padding: 56px 0;
  }

  &__title {
    @include title;
    text-align: center;
    margin-bottom: 56px;
  }

  &__container {
    @include layout;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 48px 1fr 48px 1fr;
    grid-template-rows: minmax(max-content, 340px);
    grid-gap: 16px;
    &_good, &_bad {
      margin-bottom: 64px;
      @media (max-width: 756px) {
        margin-bottom: 32px;
      }
      img {
        padding-top: 80px;
        @media (max-width: 756px) {
          transform: rotate(90deg);
          padding: 0;
          margin: 0 auto;
        }
      }
    }
    @media (max-width: 756px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 48px 1fr 48px 1fr;
      row-gap: 24px;
    }
  }
  &__block {
    @media (max-width: 756px) {
      display: flex;
    }
  }
}
</style>
