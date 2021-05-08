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
        <div class="tour-tag">На этой неделе</div>
        <div class="tour-tag">Тур на один день</div>
        <div class="tour-tag">Экстремальный тур</div>
        <div class="tour-tag">Без спец оборудования</div>
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Название</div>
        <demalAppInputEdit v-model="name" placeholder="Введите название" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Описание</div>
        <demalAppTextarea :value="description" placeholder="Введите описание" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Цена</div>
        <demalAppInputEdit v-model="cost" placeholder="Введите цену" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Время проведения</div>
        <demalAppInputEdit
          v-model="date"
          placeholder="Введите время проведение"
        />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Локация</div>
        <demalAppInputEdit v-model="location" placeholder="Введите локацию" />
      </div>
      <div class="tour-input">
        <div class="tour-input-title">Необходимые вещи</div>
        <demalAppTextarea
          :value="staff"
          placeholder="Введите необходимые вещи"
        />
      </div>
    </div>
    <demalAppButton>Добавить</demalAppButton>
  </div>
</template>

<script>
import demalAppInputEdit from "@/components/common/demal-app-input";
import demalAppTextarea from "@/components/common/demal-app-textarea";
import demalAppButton from "@/components/common/demal-app-button";

export default {
  components: {
    demalAppInputEdit,
    demalAppTextarea,
    demalAppButton,
  },
  data() {
    return {
      name: "",
      description: "",
      cost: "",
      date: "",
      location: "",
      staff: "",
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
