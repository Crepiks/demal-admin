<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.button {
  border: 1px solid $primary;
  padding: 10px 10px;
  border-radius: 4px;
  background-color: $primary;
  width: 100%;
  color: $white;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}
</style>
