<template>
  <v-app-bar color="transparent" elevation="3">
    <v-badge class="d-none d-md-flex">
      <template v-slot:badge>Beta</template>
      <v-btn
        @click="
          $store.commit('setSearch', { query: '' })
          $store.dispatch('fetch_news')
        "
        class="app-title"
        to="/"
        x-large
        outlined
        tile
        exact
        dark
        text
      >
        <h2 class="display-1">
          EpicGamer
        </h2>
      </v-btn>
    </v-badge>

    <v-btn
      v-for="(item, i) in appBar.data"
      :key="i"
      :to="item.link"
      :disabled="!item.link"
      @click="
        if (i <= 0) {
          $store.commit('setSearch', { query: '' })
          $store.dispatch('fetch_news')
        }
      "
      :class="{
        'ml-5': $vuetify.breakpoint.name !== 'xs' && i === 0,
        'd-none d-sm-flex': $vuetify.breakpoint.name === 'xs' && i > 1
      }"
      text
      exact
    >
      <h2 class="title font-weight-bold">
        {{ item.text }}
      </h2>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text exact class="d-inline d-sm-none">
          <h2 class="title font-weight-bold">
            更多
            <v-icon>
              mdi-menu-down
            </v-icon>
          </h2>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in appBar.data.slice(2, index)"
          :key="index"
          :to="item.link"
          :disabled="!item.link"
        >
          <v-list-item-title>
            <h2 class="title font-weight-bold">
              {{ item.text }}
            </h2>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="search"
      @keyup.enter="
        $router.push('news')
        $store.commit('setSearch', { query: search })
        $store.dispatch('fetch_news')
      "
      :placeholder="$store.state.search.query"
      @click:clear="$store.commit('setSearch', { query: '' })"
      label="搜索"
      hide-details
      solo
      rounded
      outlined
      dense
      flat
      class="d-none d-sm-flex"
      clearable
      background-color="primary"
      style="max-width: 300px"
    />
  </v-app-bar>
</template>

<style lang="scss" scoped>
.app-title {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}
</style>

<script>
export default {
  data: () => ({
    search: '',
    appBar: {
      data: [
        {
          text: '主页',
          link: '/',
          icon: 'mdi-home-outline'
        },
        {
          text: '业内新闻',
          link: '/news',
          icon: 'mdi-newspaper-variant-outline'
        },

        {
          text: '数据报告',
          link: '/data',
          icon: 'mdi-chart-timeline'
        },
        {
          text: '游戏库',
          link: '/game',
          icon: 'mdi-gamepad-square-outline'
        }
      ]
    }
  })
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration-line: none !important;
}
</style>
