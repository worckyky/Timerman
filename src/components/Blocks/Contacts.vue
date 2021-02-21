<template>
  <div class="Contacts">
    <FloatingDecoration class="brands__float-right"/>
    <div class="Contacts__container">
      <div class="Contacts__text">
        <h1 class="Contacts__title">
          Появились вопросы?
        </h1>
        <p class="Contacts__desc">У нас есть ответы!</p>
      </div>
      <div class="Contacts__info">
        <img src="../../assets/images/contacts/Manager.jpg" alt="" class="Contacts__info-manager">
        <p class="Contacts__name">Антон</p>
        <div class="Contacts__block">
          <a href="tel:+79172410144">+7 (917) 241-01-44</a>
          <div class="Contacts__social">
            <a href="tel:+79172410144" target="_blank"><img src="../../assets/images/contacts/social/Phone.svg" alt=""></a>
            <a href="https://teleg.run/timerman_org" target="_blank"><img src="../../assets/images/contacts/social/Telegram.svg" alt=""></a>
            <a href="https://clck.ru/TPBTK" target="_blank"><img src="../../assets/images/contacts/social/WhatsApp.svg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <FloatingDecoration class="brands__float-left"/>
  </div>
</template>


<script>
import FloatingDecoration from "@/components/FloatingDecoration";
export default {
  components: {FloatingDecoration}
}
</script>


<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Contacts {
  background-color: $gray600;
  padding-top: 56px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &__float {
    z-index: 0;
    &-right {
      left: 0;
      bottom: 0;
    }
    &-left {
      right: 0;
      top: 0;
    }
  }
  @media (max-width: 768px) {
    padding: 32px 0;
  }
  &__container {
    @include layout;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  &__text {
    grid-column: 1 / 5;
    @media (max-width: 768px) {
      grid-column: 1;
      text-align: center;
      margin-bottom: 24px;
    }
  }
  &__desc {
    font-size: 14px;
    line-height: 22px;
  }
  &__title {
    @include title;
    margin-bottom: 16px;
  }
  &__info {
    display: flex;
    grid-column: 5 / 12;
    align-items: center;
    position: relative;
    z-index: 0;
    @media (max-width: 768px) {
      grid-column: 1;
      flex-direction: column;
    }
    &-manager {
      height: 140px;
      border: 1px solid $red;
      @media (max-width: 768px) {
        order: 2;
      }
    }
    &::after {
      content: '';
      background: url("../../assets/images/TimerPattern.svg");
      position: absolute;
      width: 580px;
      height: 466px;
      display: block;
      top: 0;
      left: 140px;
      z-index: -1;
      @media (max-width: 768px) {
        left: 0;
        opacity: 0.3;
      }
    }
  }
  &__name {
    position: absolute;
    top: 32px;
    left: 0;
    @media (max-width: 768px) {
      position: initial;
      order: 1;
      margin-bottom: 16px;
    }
  }
  &__block {
    background-color: $white;
    width: 60%;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
      order: 3;
      width: 90%;
    }
    a {
      font-size: 18px;
      line-height: 32px;
      color: $dark;
      text-decoration: none;
      margin-bottom: 16px;
    }
  }
  &__social {
    a {
      margin: 0 8px;
    }
  }
}
</style>