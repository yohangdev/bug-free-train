<template>
  <div>
    <div class="p-4">
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full mr-4" :src="item['user']['photo_url_full'] ? item['user']['photo_url_full'] : 'https://yitsol.com/wp-content/themes/vispa/assets/img/avatar-dummy.jpg'" />
        <div>
          <p class="text-gray-900">{{ item['user']['name'] }}</p>
          <p class="text-gray-600 text-sm">{{ concatLocation(item) }}</p>
          <p class="text-gray-600 text-sm">{{ item['user']['kabkota'] }}</p>
        </div>
      </div>
    </div>

    <img :src="item['image_path_full']" />

    <div class="p-4 pb-2">
      <div class="flex">
        <p class="text-gray-600">{{ formatDateShort(item['created_at']) }}</p>
      </div>
    </div>

    <div class="p-4 py-2 pt-0">
      <p>{{ item['text'] }}</p>
    </div>
  </div>
</template>

<script>
import { formatDateShort } from '@/lib/date'

export default {
  props: ['item'],

  methods: {
    formatDateShort,

    concatLocation (item) {
      return `RW ${item.user.rw}, ${item.user.kelurahan}, ${item.user.kecamatan}`
    }
  }
}
</script>
