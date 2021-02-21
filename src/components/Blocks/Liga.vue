<template>
  <div class="Liga">
    <div class="Liga__container">
      <div class="Liga__title">
        Лиги
      </div>
      <div class="Liga__type">
        <LigaContainer v-for="(l, i) of liga" :key="i"
                       :image="l.image"
        >
          <template v-slot:title>
            <span class="Liga_red">{{ l.title }}</span><br> участников в команде
          </template>
          <template v-slot:price>
            <span class="Liga_red">{{ l.price }}</span> *
          </template>
        </LigaContainer>
      </div>
      <p class="Liga__additional">
        *без учета стоимости слотов
      </p>
      <div class="Liga__bonus">
        <div class="Liga__more">
          <h2 class="Liga__bonus-title">
            Команда лиги получает:
          </h2>
          <ListColumn :list="more"/>
          <img src="../../assets/images/liga/runner.svg" alt="">
        </div>
        <div class="Liga__plus">
          <h2 class="Liga__bonus-title">
            Дополнительные услуги:
          </h2>
          <ListColumn :list="plus"/>
        </div>
        <div class="Liga__rules" @click="downloadLink">
          <div class="Liga__rules-download">
            <img src="../../assets/images/liga/document.svg" alt="">
            <p>Скачать положение</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import LigaContainer from "@/components/LigaContainer";
import ListColumn from "@/components/ListColumn";

export default {
  components: {ListColumn, LigaContainer},
  data() {
    return {
      liga: [
        {
          title: '41 и более',
          price: '+20000 руб',
          image: 'A.svg'
        },
        {
          title: '21 - 40',
          price: '+10000 руб',
          image: 'B.svg'
        },
        {
          title: '10 - 20',
          price: '+ 5000 руб',
          image: 'C.svg'
        }
      ],
      more: [
        'Флаг организации с названием мероприятия',
        'Место для собственной Палатки в фан зоне мероприятия',
        'Участие в общекомандном зачете и борьба за призы',
        'Размещение логотипа компании на брендволле',
        'Выдача стартовых пакетов на отдельной стойке без очереди',
        'Фото команды на старте и финише'
      ],
      plus: [
        'Командная форма',
        'Дополнительный флаг',
        'Палатка',
        'Собственный фотобаннер'
      ]
    }
  },
  methods: {
    downloadLink() {
      //Изменить на актуальную ссылку для скачивания
      document.location.replace('//ya.ru')
    }
  }
}
</script>
<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Liga {
  padding: 100px 0;
  @media (max-width: 756px) {
    padding: 56px 0;
  }
  &__container {
    @include layout
  }

  &__title {
    @include title;
    text-align: center;
    margin-bottom: 56px;
  }

  &__type {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(max-content, 340px);
    grid-gap: 16px;
    @media (max-width: 756px) {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
  }

  &_black {
    color: $dark;
  }

  &_red {
    color: $red;
  }

  &__additional {
    margin: 24px 0;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    height: auto;
  }

  &__bonus {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr minmax(min-content, 138px);
    grid-gap: 16px;
    @media (max-width: 756px) {
      grid-template-columns: 1fr;
    }
    &-title {
      text-transform: uppercase;
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 24px;
      @media (max-width: 756px) {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }

  &__more, &__plus, &__rules {
    background-color: $gray600;
    padding: 32px;
    @media (max-width: 756px) {
      padding: 24px;
    }
  }

  &__more {
    grid-column: 1 / 8;
    grid-row: 1 / 3;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      right: -40px;
      bottom: -70px;
      @media (max-width: 480px) {
        display: none;
      }
    }
    @media (max-width: 756px) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  &__plus, &__rules {
    grid-column: 8 / 13;
    @media (max-width: 756px) {
      grid-column: 1;
      grid-row: auto;
    }
  }

  &__plus {
    grid-row: 1 / 2;
    @media (max-width: 756px) {
      grid-row: 2;
    }
  }

  &__rules {
    grid-row: 2 / 3;
    border: 1px solid $red ;
    display: flex;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 756px) {
      grid-row: 3;
    }
    &:hover {
      p {
        &::after {
          width: 0;
        }
      }
    }
    &-download {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        margin-right: 16px;
      }
      p {
        position: relative;
        font-size: 20px;
        line-height: 28px;
        &::after {
          content: '';
          display: block;
          width: 100%;
          position: absolute;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: $red;
          transition: ease-in-out 0.2s;
        }
      }

    }
  }
}
</style>