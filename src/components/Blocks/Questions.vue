<template>
  <div class="questions">
    <div class="questions__container">
      <div class="questions__block" v-for="(q ,i) of questions" :key="i">
        <Question
            :person="q.question.person"
            :text-type="q.question.textType"
            :text="q.question.text"
        />
        <Question
            :person="q.answer.person"
            :text-type="q.answer.textType"
            :text="q.answer.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question";

export default {
  components: {Question},
  data() {
    return {
      questions: [
        {
          question: {
            person: 'User',
            textType: 'Title',
            text: 'Что такое корпоративная лига? 🤔'
          },
          answer: {
            person: 'Timer',
            textType: 'Paragraph',
            text: 'Это - соревнование среди предприятий и организаций.'
          }
        },
        {
          question: {
            person: 'User',
            textType: 'Paragraph',
            text: 'Сколько моих коллег может принять участие?'
          },
          answer: {
            person: 'Timer',
            textType: 'Paragraph',
            text: 'От 10 до оставшегося количества слотов. Остаток можно посмотреть на сайте регистрации timerman.org'
          }
        },
        {
          question: {
            person: 'User',
            textType: 'Paragraph',
            text: 'Это отдельный старт?'
          },
          answer: {
            person: 'Timer',
            textType: 'Paragraph',
            text: 'Нет, соревнование проходит в рамках основного мероприятия, например в рамках Казанского Марафона или Альметьевского Триатлона и т.д.'
          }
        },
        {
          question: {
            person: 'User',
            textType: 'Paragraph',
            text: 'В чем плюсы участия в корпоративной лиге?'
          },
          answer: {
            person: 'Timer',
            textType: 'Paragraph',
            text: 'Вы получаете скидку на слоты 10% и за вас платит комания 😉'
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.questions {
  @include layout;
  &__container {
    padding: 56px 0;
    max-width: 900px;
    margin: 0 auto;
    @media (max-width: 756px) {
      padding: 56px 0;
    }
  }

  &__block {
    margin-bottom: 80px;
    @media (max-width: 756px) {
      margin-bottom: 32px;
    }
  }
}
</style>
