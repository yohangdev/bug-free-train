import * as types from '../mutation-types'
import http from '@/http'

// state
export const state = {
  loading: true,
  items: [],
  currentPage: 1
}

// getters
export const getters = {
  loading: state => state.loading,
  items: state => state.items,
  currentPage: state => state.currentPage
}

// mutations
export const mutations = {
  [types.POSTS_LIST_INIT] (state) {
    state.loading = true
  },

  [types.POSTS_LIST_LOADED] (state, { loadedItems }) {
    const ids = new Set(state.items.map(d => d.id))
    const merged = [...state.items, ...loadedItems.filter(d => !ids.has(d.id))]

    state.items = merged
    state.loading = false
  },

  [types.POSTS_LIST_INCREMENT_PAGE] (state) {
    state.currentPage++
  }
}

// actions
export const actions = {
  async fetchItems ({ commit }, { page }) {
    commit(types.POSTS_LIST_INIT)

    const { data } = await http.get(`user-posts?page=${page}`)

    commit(types.POSTS_LIST_LOADED, { loadedItems: data.data.items })
  }
}
