<template>
  <div>
    <div class="Participants">
      <div class="Participants__block" v-for="(p, i) of participants" :key="i" @change="showChange">
        <span>Бегут дистанцию:</span>
        <label for="distance" class="Participants__select">
          <select id="distance" v-model="p.choseDistance" @change="clearSelect(p.id)">
            <option v-for="(d, i) of propDistance" :key="i" :value="d[1]">
              {{ d[0] }}
            </option>
          </select>
        </label>
        <span>Человек:</span>
        <input type="number" min="0" v-model="p.count" @change="sumData(p.id, +p.count, p.choseDistance)">
        <div @click="DeleteDistance(p.id, p.sum)" v-if="i !== 0" class="Participants__delete">
          <img src="../assets/images/delete_icon.svg" alt="">
        </div>
      </div>
    </div>
    <div class="Participants__add" @click="AddDistance" v-if="showAddButton">
      <img src="../assets/images/add_icon.svg" alt="">
      Добавить дистанцию
    </div>
  </div>
</template>


<script>
export default {
  props: {
    propDistance: Array,
    clearData: Boolean
  },
  data() {
    return {
      participants: [
        {
          id: new Date().getMilliseconds(),
          count: 0,
          distance: this.propDistance,
          choseDistance: null,
          sum: 0
        }
      ],
      fullPrice: 0,
      countOfMembers: 0,
      allDistance: 0,
    }
  },
  methods: {
    AddDistance() {
      this.participants.push({
        id: new Date().getMilliseconds(),
        count: 0,
        distance: this.propDistance,
        choseDistance: this.propDistance[0],
        sum: 0
      })
    },
    DeleteDistance(id, localSum) {
      this.participants = this.participants.filter(elem => elem.id !== id)
      this.fullPrice = this.fullPrice - localSum
      this.showChange()
    },
    sumData(id, count, distance) {
      this.participants = this.participants.map(elem => {
        const moreTen = (num) => {
          if (num < 10) {
            return num * distance
          } else {
            return num * (distance - (distance * 0.1))
          }
        }
        if (elem.id === id) {
          elem.sum = moreTen(count)
        }
        return elem
      })
    },
    clearSelect(id) {
      this.participants = this.participants.map(elem => {
        if (elem.id === id) {
          elem.count = 0
          elem.sum = 0
        }
        return elem
      })
    },
    showChange() {
      this.fullPrice = this.participants.reduce((acum, elem) => {
        return acum + elem.sum
      }, 0)
      this.countOfMembers = this.participants.reduce((acum, elem) => {
        return acum + +elem.count
      }, 0)
      this.allDistance = this.participants.reduce((acum, elem) => {
        const myDistance = elem.distance.find(i => i[1] === elem.choseDistance)[0]
        return [...acum, myDistance]
      }, [])
      this.$emit('pushSum', [this.fullPrice, this.countOfMembers, this.allDistance])
    }
  },
  computed: {
    showAddButton() {
      return this.participants.length <= this.propDistance.length - 1
    }
  },
  watch: {
    clearData() {
      this.participants = [
        {
          id: new Date().getMilliseconds(),
          count: 0,
          distance: this.propDistance,
          choseDistance: null,
          sum: 0
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Participants {
  &__add {
    height: 92px;
    border: 1px solid $red;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    margin-top: 16px;

    img {
      margin-right: 8px;
    }

    &:hover {
      background-color: rgba(200, 20, 28, 0.1);
    }
  }

  &__block {
    border: 1px solid $gray600;
    padding: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    position: relative;

    span {
      font-size: 12px;
      line-height: 12px;
      margin-right: 8px;
      width: max-content;
    }

    input {
      max-width: 120px;
      padding: 12px 16px;
      font-size: 16px;
      line-height: 32px;
      border: 1px solid $gray600;
      color: #9F9F9F;
      cursor: pointer;
      outline: none;
      transition: ease-in-out 0.2s;

      &:focus {
        color: $dark;
      }

      &:hover {
        color: $dark;
        border: 1px solid $red;
      }
    }
  }

  &__select {
    margin-right: 8px;
    position: relative;
    display: flex;
    align-items: center;
    width: 160px;
    z-index: 1;
    border: 1px solid $gray600;
    transition: ease-in-out 0.2s;

    &:focus {
      select {
        color: $dark;
      }
    }

    &:hover {
      select {
        color: $dark;
      }

      border: 1px solid $red;
    }

    select {
      width: 100%;
      padding: 12px 16px;
      font-size: 16px;
      line-height: 32px;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
      color: #9F9F9F;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      border: none;
      outline: none;
      background: url("../assets/images/arrow_down.svg") calc(100% - 8px) / 24px no-repeat;
    }
  }

  &__delete {
    cursor: pointer;
    position: absolute;
    right: 24px;
  }
}
</style>
