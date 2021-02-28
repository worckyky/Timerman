<template>
  <label class="Select__label">
    <select id="events" @input="$emit('input', $event.currentTarget.value)" class="Select__input">
      <option v-for="(c, i) in options"
              :value="c.id"
              :key="i">
        {{ c.name }}
      </option>
    </select>
  </label>
</template>


<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    options: Array[String]
  }
}
</script>


<style scoped lang="scss">
@import "~@/assets/styles/_variables.scss";
@import "~@/assets/styles/mixins.scss";

.Select {

  &__input {
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 32px;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    border: 1px solid $gray600;
    color: #9F9F9F;
    cursor: pointer;
    outline: none;
    transition: ease-in-out 0.2s;
    background: url("../assets/images/arrow_down.svg") calc(100% - 16px) / 24px no-repeat;
    &:focus {
      color: $dark;
    }
    &:hover {
      color: $dark;
      border: 1px solid $red;
    }
  }
}
</style>