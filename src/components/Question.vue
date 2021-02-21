<template>
  <div class="question" :class="`question_${showRender.side}`">
    <div class="question__container">
      <div class="question__ava" :class="`question__ava_${showRender.side}`">
        <img :src="require(`@/assets/images/question/${showRender.icon}`)" alt="Icon">
      </div>
      <div
          class="question__content"
          :class="`question__content_${showText} question__content_${showRender.side}`"

      >
        {{ text }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    text: String,
    person: {
      type: String,
      required: true
    },
    textType: String
  },
  computed: {
    showRender() {
      switch (this.person) {
        case 'User':
          return {
            icon: 'user.svg',
            side: 'left'
          }
        case 'Timer':
          return {
            icon: 'timer.svg',
            side: 'right'
          }
        default:
          return null
      }
    },
    showText() {
      switch (this.textType) {
        case 'Title':
          return 'title'
        case 'Paragraph':
          return 'paragraph'
        default:
          return null
      }
    }

  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";

.question {
  width: 100%;
  display: flex;

  &_left {
    justify-content: flex-start;
  }

  &_right {
    justify-content: flex-end;
  }

  &__container {
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
  }

  &__ava {
    img {
      width: 32px;
    }

    &_right {
      margin-left: 16px;
      order: 2;
    }

    &_left {
      margin-right: 16px;
      order: 1;
    }
  }

  &__content {
    padding: 16px;
    border: 1px solid $red;
    max-width: 390px;

    &_right {
      order: 1;
    }

    &_left {
      order: 2;
    }

    &_title, &_paragraph {
      color: $dark;
    }

    &_title {
      font-size: 24px;
      line-height: 36px;
      font-weight: 700;
      text-transform: uppercase;
      @media (max-width: 480px) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    &_paragraph {
      font-size: 16px;
      line-height: 24px;
    }
  }

}

</style>