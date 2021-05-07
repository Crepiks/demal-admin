<template>
  <textarea
    :type="type"
    :placeholder="placeholder"
    class="input"
    :value="value"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    value: {
      type: [Number, String, Array],
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.input {
  border: 1px solid transparent;
  box-sizing: border-box;
  padding: 14px 20px;
  font-size: 14px;
  border-radius: 12px;
  background-color: #262338;
  width: 100%;
  color: $white;
  outline: none;
  transition: 200ms ease-in-out;
  line-height: 20px;
  min-height: 100px;

  &:focus {
    padding-left: 23px;
  }
}
</style>
