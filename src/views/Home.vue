<template>
  <div>
    <climbing-box-loader
      :color="'#68d391'"
      :loading="isLoading"
      :size="20"
    ></climbing-box-loader>
    <px-assets-table v-if="!isLoading" v-bind:assets="assets" />
    <!-- Aqui le pasamos assets -->
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  },
}
</script>
