<template>
  <div class="tour">
    <div class="tour-title">Добавление тура</div>
    <a-upload-dragger
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <a-icon type="inbox" />
      </p>
      <p class="ant-upload-text">Загрузите фотографии местности</p>
      <p class="ant-upload-hint">
        Поддержка однократной или массовой загрузки. Строго запретить загрузку
        данных компании или других файлов группы
      </p>
    </a-upload-dragger>
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
      <demalAppInput
        class="tour-input"
        v-model="tour.title"
        title="Название"
        placeholder="Введите название"
      />
      <demalAppTextarea
        class="tour-input"
        v-model="tour.description"
        title="Описание"
        placeholder="Введите описание"
      />
      <demalAppInput
        class="tour-input"
        v-model="tour.date"
        title="Время проведения"
        placeholder="Введите время проведения"
      />
      <demalAppInput
        class="tour-input"
        v-model="tour.lon"
        title="Долгота"
        placeholder="Введите долготу"
      />
      <demalAppInput
        class="tour-input"
        v-model="tour.lat"
        title="Широта"
        placeholder="Введите широту"
      />
      <demalAppTextarea
        class="tour-input"
        v-model="tour.equipment"
        title="Необходимые вещи"
        placeholder="Введите необходимые вещи"
      />
    </div>
    <demalAppButton>Добавить</demalAppButton>
  </div>
</template>

<script>
import demalAppInput from "@/components/common/demal-app-input";
import demalAppTextarea from "@/components/common/demal-app-textarea";
import demalAppButton from "@/components/common/demal-app-button";

export default {
  components: {
    demalAppInput,
    demalAppTextarea,
    demalAppButton,
  },
  data() {
    return {
      tour: {
        id: 0,
        tag: "",
        title: "",
        description: "",
        cost: "",
        date: "",
        lon: "",
        lat: "",
        equipment: "",
        participants: [],
        rating: "",
        images: [],
      },
    };
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.tour {
  max-height: 100%;
  overflow: auto;

  &-title {
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
    margin-bottom: 30px;
  }

  &-upload {
    margin-top: 30px;
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.ant-upload {
  background-color: transparent !important;
}

.ant-upload-text {
  color: $white !important;
}

.ant-upload-hint {
  color: $white !important;
  opacity: 0.7;
}
</style>
