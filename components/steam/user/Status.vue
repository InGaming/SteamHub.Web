<template>
  <div>
    <div>
      <h2 class="display-2">
        Steam 在线人数
      </h2>
    </div>

    <v-row class="my-5">
      <v-col cols="12" sm="6" class="mt-10">
        <h3 class="display-1">
          {{ parseInt(data.avg.toFixed(0)).toLocaleString() }}
        </h3>
        <h4 class="headline">
          平均在线
        </h4>
      </v-col>

      <v-col cols="12" sm="6" class="mt-10">
        <h3 class="display-1">
          {{ data.max.toLocaleString() }}
        </h3>
        <h4 class="headline">
          今日峰值
        </h4>
      </v-col>

      <v-col cols="12" sm="6" class="mt-10">
        <h3 class="display-1">
          {{ data.min.toLocaleString() }}
        </h3>
        <h4 class="headline">
          今日低谷
        </h4>
      </v-col>

      <v-col cols="12" sm="6" class="mt-10">
        <h3 class="display-1">
          {{ data.now.toLocaleString() }}
        </h3>
        <h4 class="headline">
          当前在线
        </h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>
