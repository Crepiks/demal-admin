<template>
  <div class="tours">
    <div class="tours-list">
      <demalAppInput placeholder="Искать" />
      <div class="tours-tags">
        <div class="tours-tag">На этой неделе</div>
        <div class="tours-tag">Тур на один день</div>
        <div class="tours-tag">Экстремальный тур</div>
        <div class="tours-tag">Без спец оборудования</div>
      </div>
      <div class="tours-title-container">
        <h2 class="tours-title">Туры <span class="tours-number">30</span></h2>
        <div class="tours-add">
          <svg
            class="tours-add-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #ffffff; transform: ; -ms-filter: "
          >
            <path
              d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="tours-wrapper">
        <tourCard class="tours-card" />
        <tourCard class="tours-card" />
        <tourCard class="tours-card" />
        <tourCard class="tours-card" />
      </div>
    </div>
  </div>
</template>

<script>
import demalAppInput from "@/components/common/demal-app-input";
import tourCard from "@/components/tours/demal-tour-card";

export default {
  components: {
    demalAppInput,
    tourCard,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.tours {
  color: $white;
  display: flex;
  justify-content: space-between;

  &-list {
    width: 40%;
    box-sizing: border-box;
  }

  &-title {
    opacity: 0.9;
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;

    &-container {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &-add {
    border-radius: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #4f4b64;
    margin-bottom: 4px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-add:hover {
    opacity: 0.8;
  }

  &-number {
    font-size: 12px;
    color: $white;
    opacity: 0.7;
  }

  &-wrapper {
    margin-top: 40px;
  }

  &-card {
    margin-bottom: 30px;
  }

  &-tags {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  &-tag {
    border-radius: 50px;
    width: fit-content;
    border: 1px solid #b2b2b2;
    color: #b2b2b2;
    padding: 10px 20px;
    font-size: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-tag:hover {
    background-color: #b2b2b2;
    color: $black;
  }
}
</style>
