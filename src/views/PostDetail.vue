<template>
  <div>
    <div class="container mx-auto">
      <post v-if="item" :item="item" class="mb-5 border-b pb-2"></post>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import Post from '@/components/Post'

export default {
  components: {
    Post
  },

  data () {
    return {
      item: null
    }
  },

  mounted () {
    this.fetchItem()
  },

  methods: {
    async fetchItem () {
      const id = this.$route.params.id
      const { data } = await http.get(`user-posts/${id}`)

      this.item = data.data
    }
  }
}
</script>
