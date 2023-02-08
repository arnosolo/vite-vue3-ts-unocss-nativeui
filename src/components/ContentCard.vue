<script setup lang="ts">
import type { ContentSlice } from '@src/composables/useContentSlices'
import { NIcon } from 'naive-ui'
import { Copy, Edit, Play } from '@vicons/fa'
import { useDateFormat } from '@vueuse/core'
import { computed } from 'vue'

interface Props {
  contentSlice: ContentSlice
}

const props = defineProps<Props>()

const startTime = computed(() => useDateFormat(props.contentSlice.startSecond * 1000, 'mm:ss'))
const endTime = computed(() => useDateFormat(props.contentSlice.endSecond * 1000, 'mm:ss'))
</script>

<template>
  <li flex flex-col gap-3 pb-3 border-b-2 border-gray-100 text-gray-500>
    <div flex justify-between items-center>
      <div flex items-center gap-2>
        <n-icon size="16" color-gray-600>
          <play />
        </n-icon>
        <p>{{ `${startTime.value} - ${endTime.value}` }}</p>
      </div>
      <div flex items-center gap-2>
        <button>
          <n-icon size="16" color-gray-600>
            <edit />
          </n-icon>
        </button>
        <button>
          <n-icon size="16" color-gray-600>
            <copy />
          </n-icon>
        </button>
      </div>
    </div>

    <div flex justify-between gap-4>
      <!-- TODO: xss -->
      <div v-html="contentSlice.text" />
      <div flex flex-col gap-4>
        <img
          :src="contentSlice.image" :alt="contentSlice.imageAlt"
          w-56 h-fit rounded-md overflow-hidden
        >
        <div flex flex-col gap-2>
          <div px-4 py-2 rounded-full bg-blue-50 text-center>
            too late save for the next day
          </div>
          <div flex justify-between px-4 gap-4 text-xs>
            <p>Previous Frame</p>
            <p>Next Frame</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>

</style>
