<template>
  <div class="home">
    <div class="container mx-auto">
      <div v-for="item in items" :key="item.id">
        <router-link :to="`post/${item.id}`">
          <post :item="item" class="mb-5 border-b pb-2"></post>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Post from '@/components/Post'

export default {
  components: {
    Post
  },

  data () {
    return {
      currentPage: 1
    }
  },

  computed: mapGetters({
    items: 'posts-list/items'
  }),

  mounted () {
    this.fetchItems()
    this.scroll()
  },

  methods: {
    async fetchItems () {
      await this.$store.dispatch('posts-list/fetchItems', { page: this.currentPage })
    },

    scroll () {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.currentPage++
          this.fetchItems()
        }
      }
    }
  }
}
</script>
