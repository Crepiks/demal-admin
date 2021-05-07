<template>
  <div class="tour">
    <div class="tour-image">
      <img :src="mainImage" class="tour-image-inner" alt="" />
    </div>
    <div class="tour-images">
      <div
        class="tour-images-single"
        v-for="image in images"
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
        <div class="tour-tag">На этой неделе</div>
        <div class="tour-tag">Тур на один день</div>
        <div class="tour-tag">Экстремальный тур</div>
        <div class="tour-tag">Без спец оборудования</div>
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Название</div>
        <demalAppInputEdit v-model="name" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Описание</div>
        <demalAppTextarea :value="description" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Цена</div>
        <demalAppInputEdit v-model="cost" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Время проведения</div>
        <demalAppInputEdit v-model="date" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Локация</div>
        <demalAppInputEdit v-model="location" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Необходимые вещи</div>
        <demalAppTextarea :value="staff" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Участники</div>
        <demalAppTextarea :value="participants" />
      </div>
    </div>
    <demalAppButton>Сохранить</demalAppButton>
  </div>
</template>

<script>
import demalAppInputEdit from "@/components/common/demal-app-input-edit";
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
    demalAppInputEdit,
    demalAppTextarea,
    demalAppButton,
  },
  data() {
    return {
      name: "Озеро Кольсай Каинды и черный каньон",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, delectus error quaerat dolore earum incidunt totam optio. Cupiditate deserunt reprehenderit fuga, facilis repudiandae deleniti necessitatibus quae placeat vel, illo earum.",
      cost: "150$",
      date: "23.05.2021",
      location: "Озеро Кольсай Каинды",
      staff: "",
      participants: "",
      mainImage: kolsai,
      images: [
        {
          id: 0,
          path: kolsai,
          cover: false,
        },
        {
          id: 1,
          path: kolsai1,
          cover: false,
        },
        {
          id: 2,
          path: kolsai2,
          cover: false,
        },
        {
          id: 3,
          path: kolsai3,
          cover: false,
        },
        {
          id: 4,
          path: kolsai4,
          cover: false,
        },
        {
          id: 5,
          path: kolsai5,
          cover: false,
        },
      ],
      kolsai: kolsai,
      kolsai1: kolsai1,
      kolsai2: kolsai2,
      kolsai3: kolsai3,
      kolsai4: kolsai4,
      kolsai5: kolsai5,
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
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.tour {
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

  &-input {
    &-title {
      font-size: 13px;
      color: $white;
      opacity: 0.8;
      margin-bottom: 10px;
    }
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
  }

  &-tag:hover {
    background-color: #b2b2b2;
    color: $black;
  }
}
</style>
