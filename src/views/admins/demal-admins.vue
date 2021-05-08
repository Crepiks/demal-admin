<template>
  <div class="admins">
    <div class="admins-left-half">
      <demalAppInput class="admins-search" placeholder="Искать" />
      <table class="admins-table">
        <tr>
          <th class="admins-table-head">ИМЯ</th>
          <th class="admins-table-head">ПОЧТА</th>
        </tr>
        <tr v-for="admin in admins" :key="admin.id" class="admins-table-row">
          <th class="admins-table-data">{{ admin.name }}</th>
          <th class="admins-table-data">{{ admin.email }}</th>
        </tr>
      </table>
    </div>
    <div class="admins-right-half"></div>
  </div>
</template>

<script>
import demalAppInput from "@/components/common/demal-app-input";

export default {
  components: {
    demalAppInput,
  },
  data() {
    return {
      admins: [
        {
          id: 0,
          name: "Данияр Егеубай",
          email: "donchik020202@gmail.com",
        },
        {
          id: 1,
          name: "Данияр Егеубай",
          email: "donchik020202@gmail.com",
        },
        {
          id: 2,
          name: "Данияр Егеубай",
          email: "donchik020202@gmail.com",
        },
        {
          id: 3,
          name: "Данияр Егеубай",
          email: "donchik020202@gmail.com",
        },
        {
          id: 4,
          name: "Данияр Егеубай",
          email: "donchik020202@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.admins {
  color: $white;
  display: flex;
  justify-content: space-between;

  &-search {
    width: 500px;
  }

  &-left-half {
    width: 50%;
  }

  &-table {
    width: 100%;
    font-family: "PT Sans Caption", sans-serif !important;
    margin-top: 40px;

    &-head {
      opacity: 0.6;
      padding: 20px 15px;
      box-sizing: border-box;
    }

    &-row:nth-child(2n + 1) {
      background-color: #4f4b64;
      border-radius: 15px;
    }

    &-data {
      padding: 20px 15px;
      box-sizing: border-box;
    }
  }
}
</style>
