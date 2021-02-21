<template>
  <div class="main">
    <FloatingDecoration class="main__float-right"/>
    <div class="main__container">
      <div class="main__content">
        <h1 class="main__title">Здоровый досуг
          <br>
          <span class="main__red">с коллегами!</span></h1>
        <div class="main__button">
          <Button add-style="Field" class="main__btn">Выбрать мероприятие</Button>
          <Button add-style="Outline">Написать</Button>
        </div>
      </div>
      <div class="main__image">
        <img src="../../assets/images/main/main-spin.png" alt="Spin" class="main__image_spin">
        <img src="../../assets/images/main/main-image.jpg" alt="Main" class="main__image_first">
        <img src="../../assets/images/main/main-word.png" alt="Spin" class="main__image_word">
      </div>
    </div>
    <FloatingDecoration class="main__float-left"/>
  </div>
</template>

<script>
import Button from "@/components/Button";
import FloatingDecoration from "@/components/FloatingDecoration";

export default {
  components: {FloatingDecoration, Button}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.main {
  background: $gray600;
  height: 500px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  @media (max-width: 992px) {
    height: 400px;
  }
  @media (max-width: 620px) {
    height: fit-content;
    padding: 32px 0;
  }

  &__float {
    z-index: -1;
    &-right {
      left: -250px;
      bottom: -250px;
    }
    &-left {
      right: -230px;
      top: -280px;
    }
  }

  &__container {
    z-index: -1;
    @include layout;
    display: flex;
    @media (max-width: 620px) {
      flex-direction: column;
    }
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media (max-width: 620px) {
      width: 100%;
      order: 2;
    }
  }

  &__image {
    position: relative;
    width: 50%;
    display: flex;
    @media (max-width: 992px) {
      align-items: flex-end;
      justify-content: flex-end;
    }
    @media (max-width: 620px) {
      width: 100%;
      order: 1;
      justify-content: flex-start;
      overflow: hidden;
      height: 220px;
    }

    &_first {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: 500px;
      @media (max-width: 992px) {
        width: 100%;
        height: fit-content;
        position: relative;
      }
      @media (max-width: 620px) {
        width: 420px;
        position: absolute;
        height: auto;
        top: 0;
        left: 0;
      }
    }

    &_spin, &_word {
      z-index: 10;
      position: absolute;
    }

    &_word {
      right: -5%;
      bottom: 30px;
      @media (max-width: 992px) {
        display: none;
      }
    }

    &_spin {
      width: 140px;
      left: -60px;
      top: 50px;
      animation: RotateSpin 12s infinite 0s linear;
      @media (max-width: 992px) {
        width: 100px;
        left: 30%;
        top: 70px;
      }
      @media (max-width: 620px) {
        left: 86%;
      }
      @media (max-width: 480px) {
        top: 60px;
      }
    }
  }

  &__title {
    font-size: 50px;
    line-height: 60px;
    font-style: italic;
    text-transform: uppercase;
    margin-bottom: 32px;
    @media (max-width: 992px) {
      font-size: 36px;
      line-height: 53px;
    }
    @media (max-width: 620px) {
      margin-top: 32px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__button {
    display: flex;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  &__btn {
    margin-right: 24px;
    @media (max-width: 992px) {
      margin-bottom: 16px;
    }
  }

  &__red {
    color: $red;
  }
}


@keyframes RotateSpin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>