<template>
  <a :href="'//' + link"
     class="Button"
     :class="[newStyle, setSize]"
     target="_blank"
     @click="extraClick">
    <slot/>
  </a>
</template>
<script>
export default {
  props: {
    addStyle: String,
    value: String,
    link: {
      type: String,
      default: 'www.timerman.org'
    },
    size: String,
    margin: String
  },
  computed: {
    newStyle() {
      if (this.addStyle === 'Field') {
        return 'Button_red'
      } else if (this.addStyle === 'Outline') {
        return 'Button_outline'
      }
      return 'Button_red'
    },
    setSize() {
      if (this.size === 'Small') {
        return 'Button_small'
      } else {
        return ''
      }
    }
  },
  methods: {
    extraClick() {
      this.$emit('extraClick')
    }
  }
}
</script>
<style lang="scss">
@import "~@/assets/styles/_variables.scss";

.Button {
  display: inline;
  font-size: 16px;
  line-height: 16px;
  padding: 14px 20px;
  text-transform: uppercase;
  border: 1px;
  cursor: pointer;
  font-weight: 500;
  width: fit-content;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  color: initial;

  &_small {
    font-size: 12px;
    line-height: 12px;
    padding: 14px 20px;
    color: $white;
    background-color: $red;
  }

  &_red {
    background-color: $red;
    border: 1px solid $red;
    color: $white;
    transition: ease-in-out 0.2s;

    &:hover {
      background-color: $white;
      color: $red;
    }
  }

  &_outline {
    background-color: transparent;
    border: 1px solid $red;
    color: $red;
    transition: ease-in-out 0.2s;

    &:hover {
      background-color: $red;
      opacity: 0.8;
      color: $white;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
    line-height: 14px;
  }


}

</style>