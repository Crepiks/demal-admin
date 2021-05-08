<template>
  <div class="tour">
    <div class="tour-image">
      <img :src="mainImage" class="tour-image-inner" alt="" />
    </div>
    <div class="tour-images">
      <div
        class="tour-images-single"
        v-for="image in tour.images"
        :key="image.id"
        @mouseover="changeImage(image)"
        @mouseout="mouseOut(image)"
      >
        <img :src="image.path" class="tour-images-single-inner" alt="" />
        <div
          class="tour-images-single-cover"
          :class="{ 'tour-images-single-cover-active': image.cover }"
        >
          <i class="far fa-trash-alt tour-images-single-cover-icon"></i>
        </div>
      </div>
    </div>
    <div class="tour-info">
      <div class="tour-tags">
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'На этой неделе' }"
        >
          На этой неделе
        </div>
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'Тур на один день' }"
        >
          Тур на один день
        </div>
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'Экстремальный тур' }"
        >
          Экстремальный тур
        </div>
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'Без спец оборудования' }"
        >
          Без спец оборудования
        </div>
      </div>
      <demalAppInput class="tour-input" v-model="tour.title" title="Название" />
      <demalAppTextarea
        class="tour-input"
        v-model="tour.description"
        title="Название"
      />
      <demalAppInput class="tour-input" v-model="tour.cost" title="Цена" />
      <demalAppInput
        class="tour-input"
        v-model="tour.date"
        title="Время проведения"
      />
      <demalAppInput class="tour-input" v-model="tour.lon" title="Долгота" />
      <demalAppInput class="tour-input" v-model="tour.lat" title="Широта" />
      <demalAppTextarea
        class="tour-input"
        v-model="tour.equipment"
        title="Необходимые вещи"
      />
      <demalAppTextarea
        class="tour-input"
        v-model="tour.participants"
        title="Участники"
      />
    </div>
    <demalAppButton>Сохранить</demalAppButton>
  </div>
</template>

<script>
import demalAppInput from "@/components/common/demal-app-input";
import demalAppTextarea from "@/components/common/demal-app-textarea";
import demalAppButton from "@/components/common/demal-app-button";
import kolsai from "@/assets/images/kolsai.jpg";
import kolsai1 from "@/assets/images/kolsai1.jpg";
import kolsai2 from "@/assets/images/kolsai2.jpg";
import kolsai3 from "@/assets/images/kolsai3.jpg";
import kolsai4 from "@/assets/images/kolsai4.jpeg";
import kolsai5 from "@/assets/images/kolsai5.jpg";

export default {
  components: {
    demalAppInput,
    demalAppTextarea,
    demalAppButton,
  },
  props: {
    tourId: {
      type: Number,
    },
  },
  data() {
    return {
      tour: {
        id: 0,
        tag: "Тур на один день",
        title: "Озеро Кольсай Каинды и черный каньон",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, delectus error quaerat dolore earum incidunt totam optio. Cupiditate deserunt reprehenderit fuga, facilis repudiandae deleniti necessitatibus quae placeat vel, illo earum.",
        cost: "150$",
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
      kolsai: kolsai,
      kolsai1: kolsai1,
      kolsai2: kolsai2,
      kolsai3: kolsai3,
      kolsai4: kolsai4,
      kolsai5: kolsai5,
      mainImage: null,
    };
  },
  methods: {
    changeImage(image) {
      this.mainImage = image.path;
      image.cover = true;
    },
    mouseOut(image) {
      image.cover = false;
    },
  },
  mounted() {
    this.mainImage = this.tour.images[0].path;
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.tour {
  max-height: 100%;
  overflow: auto;

  &-image {
    width: 100%;

    &-inner {
      width: 100%;
      max-height: 300px;
      border-radius: 15px;
    }
  }

  &-images {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    &-single {
      width: 90px;
      height: 80px;
      cursor: pointer;
      margin-right: 14px;
      margin-bottom: 20px;
      position: relative;

      &-inner {
        height: 100%;
        max-width: 90px;
        border-radius: 15px;
      }

      &-cover {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        background-color: #00000070;
        justify-content: space-around;
        align-items: center;
        display: none;

        &-icon {
          color: $white;
          font-size: 20px;
          transition: 200ms ease-in-out;
        }

        &-icon:hover {
          color: #e74c3c;
        }
      }

      &-cover-active {
        display: flex;
      }
    }
  }

  &-info {
    margin-top: 30px;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
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

    &-active {
      background-color: #b2b2b2;
      color: $black;
    }
  }

  &-tag:hover {
    background-color: #b2b2b2;
    color: $black;
  }
}
</style>
