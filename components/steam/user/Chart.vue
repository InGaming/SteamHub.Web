<template>
  <div>
    <client-only>
      <!-- eslint-disable vue/require-component-is -->
      <component
        :is="apexchart"
        :options="options"
        :series="series"
        height="300px"
        width="100%"
        type="area"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: null
    },
    series: {
      type: Array,
      default: null
    }
  },
  computed: {
    apexchart() {
      return () => {
        if (process.client) {
          return import('vue-apexcharts')
        }
      }
    }
  }
}
</script>
