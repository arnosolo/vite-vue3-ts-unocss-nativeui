<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import videojs from 'video.js'
import type Player from 'video.js/dist/types/player'
import 'video.js/dist/video-js.min.css'

interface Props {
  options: Record<string, any>
}

const props = defineProps<Props>()

const video_el = ref<HTMLVideoElement>()
const videoPlayer = ref<Player>()

onMounted(() => {
  try {
    if (video_el.value === undefined) {
      throw new Error('video_el is undefined')
    }
    videoPlayer.value = videojs(video_el.value, props.options, () => {
      console.log('video player ready')
    })
  }
  catch (error) {
    console.error(error)
  }
})

onBeforeUnmount(() => {
  videoPlayer.value?.dispose()
})
</script>

<template>
  <div>
    <video ref="video_el" class="video-js" />
  </div>
</template>
