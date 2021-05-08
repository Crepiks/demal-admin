<template>
  <div class="tours">
    <div class="tours-list">
      <demalAppInputSearch placeholder="Искать" />
      <div class="tours-tags">
        <div class="tours-tag">На этой неделе</div>
        <div class="tours-tag">Тур на один день</div>
        <div class="tours-tag">Экстремальный тур</div>
        <div class="tours-tag">Без спец оборудования</div>
      </div>
      <div class="tours-title-container">
        <h2 class="tours-title">
          Туры <span class="tours-number">{{ tours.length }}</span>
        </h2>
        <div class="tours-add" @click="tourAddClicked">
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
        <tourCard
          class="tours-card"
          :tour="tour"
          v-for="tour in tours"
          :key="tour.id"
          @click="tourCardClicked"
        />
      </div>
    </div>
    <div class="tours-right">
      <tourEdit v-show="active == 'tourEdit'" :tourId="tourId" />
      <tourAdd v-show="active == 'tourAdd'" />
      <div v-show="active == 'empty'" class="tours-empty">
        <div class="tours-empty-container">
          <i class="fas fa-campground tours-empty-icon"></i>
          <div class="tours-empty-text">
            Кликните на необходимый тур, чтобы просмотреть полную информацию
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demalAppInputSearch from "@/components/common/demal-app-input-search";
import tourCard from "@/components/tours/demal-tour-card";
import tourEdit from "@/components/tours/demal-tour-edit";
import tourAdd from "@/components/tours/demal-tour-add";

import kolsai from "@/assets/images/kolsai.jpg";
import kolsai1 from "@/assets/images/kolsai1.jpg";
import kolsai2 from "@/assets/images/kolsai2.jpg";
import kolsai3 from "@/assets/images/kolsai3.jpg";
import kolsai4 from "@/assets/images/kolsai4.jpeg";
import kolsai5 from "@/assets/images/kolsai5.jpg";

export default {
  components: {
    demalAppInputSearch,
    tourCard,
    tourEdit,
    tourAdd,
  },
  data() {
    return {
      active: "empty",
      tourId: null,
      tours: [
        {
          id: 0,
          tag: "Тур на один день",
          title: "Озеро Кольсай Каинды и черный каньон",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, delectus error quaerat dolore earum incidunt totam optio. Cupiditate deserunt reprehenderit fuga, facilis repudiandae deleniti necessitatibus quae placeat vel, illo earum.",
          date: "23.05.2021",
          lon: "12.23.51.85",
          lat: "12.23.51.85",
          equipment: "Lorem ipsum dolor sit amet consectetur",
          participants: [
            {
              id: 0,
              firstName: "Данияр",
            },
            {
              id: 1,
              firstName: "Данияр",
            },
            {
              id: 2,
              firstName: "Данияр",
            },
            {
              id: 3,
              firstName: "Данияр",
            },
            {
              id: 4,
              firstName: "Данияр",
            },
          ],
          rating: "4.8",
          images: [
            {
              id: 0,
              path: kolsai,
            },
            {
              id: 1,
              path: kolsai1,
            },
            {
              id: 2,
              path: kolsai2,
            },
            {
              id: 3,
              path: kolsai3,
            },
            {
              id: 4,
              path: kolsai4,
            },
            {
              id: 5,
              path: kolsai5,
            },
          ],
        },
      ],
    };
  },
  methods: {
    tourAddClicked() {
      this.active = "tourAdd";
    },
    tourCardClicked(id) {
      this.active = "tourEdit";
      this.tourId = id;
    },
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
  max-height: 100%;
  box-sizing: border-box;

  &-list {
    width: 40%;
    box-sizing: border-box;
  }

  &-title {
    opacity: 0.9;
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
    color: $white;
    margin: 0;

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
    max-height: 60%;
    overflow: auto;
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

  &-right {
    width: 50%;
  }

  &-empty {
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      margin-top: 40%;
    }

    &-icon {
      color: $primary;
      font-size: 100px;
      margin-bottom: 30px;
    }

    &-text {
      color: $white;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
