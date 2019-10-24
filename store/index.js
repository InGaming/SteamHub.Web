export const strict = false

export const state = () => ({
  drawer: true,
  changelog: {
    dialog: null,
    data: null
  },
  news: null,
  tags: null,
  refs: null,
  search: {
    query: '',
    tagName: '',
    refName: '',
    page: 1,
    length: 16
  },
  user: {
    login: false
  }
})

export const mutations = {
  setDrawer(state, drawer) {
    state.drawer = drawer
  },

  setChangelog(state, changelog) {
    state.changelog.dialog = changelog.dialog
    state.changelog.data = changelog.data
  },

  set_news(state, data) {
    state.news = data
  },

  set_tags(state, data) {
    state.tags = data
  },

  set_refs(state, data) {
    state.refs = data
  },

  set_search_query(state, data) {
    state.search.query = data
  },

  set_search_tag_name(state, data) {
    state.search.tagName = data
  },

  set_search_ref_name(state, data) {
    state.search.refName = data
  },

  set_search_page(state, data) {
    state.search.page = data
  },

  set_search_length(state, data) {
    state.search.length = data
  }
}

export const actions = {
  async fetch_news({ commit }) {
    commit('set_news', null)
    const fetchNews = await this.$axios.get(
      `/api/article/news
?length=${this.state.search.length}
&page=${this.state.search.page}
&q=${this.state.search.query}
&tagName=${this.state.search.tagName}
&refName=${this.state.search.refName}`
    )
    const data = fetchNews.data
    commit('set_search_page', data.current_page)
    commit('set_news', data)
  },

  async fetch_tags({ commit }) {
    commit('set_tags', null)
    const tags = await this.$axios.get(`/api/article/tags`)
    const data = tags.data
    commit('set_tags', data)
  },

  async fetch_refs({ commit }) {
    commit('set_refs', null)
    const refs = await this.$axios.get(`/api/article/refs`)
    const data = refs.data
    commit('set_refs', data)
  },

  async fetch_changelog({ commit }) {
    const changelog = {
      dialog: true,
      data: null
    }
    commit('setChangelog', changelog)
    const githubApi = await this.$axios.get(
      `https://api.github.com/repos/OpenEpicData/GamerClubWeb/commits`
    )
    changelog.data = githubApi.data
    commit('setChangelog', changelog)
  }
}
