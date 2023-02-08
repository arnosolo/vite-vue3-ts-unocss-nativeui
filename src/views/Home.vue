<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui'
import { NConfigProvider, NIcon, NInput, darkTheme, dateZhCN, lightTheme, zhCN } from 'naive-ui'
import { CalendarAltRegular, Edit, Microphone } from '@vicons/fa'
import { useContentSlices } from '@src/composables/useContentSlices'
import { computed, ref } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'
import VideoPlayer from '@src/components/VideoPlayer.vue'
import ContentCard from '@src/components/ContentCard.vue'

const formattedTime = useDateFormat(useNow(), 'DD/MM/YYYY')
const { contentSlices, loading } = useContentSlices()

const videoOptions = {
  autoplay: true,
  controls: true,
  width: 350,
  sources: [
    {
      src: '/vite-vue3-ts-unocss-nativeui/video.mp4',
      type: 'video/mp4',
    },
  ],
}
const videoTitleInput = ref('10 interesting facts about mosquitoes')
const currentTheme = ref<GlobalTheme>(lightTheme)
function toggleTheme() {
  currentTheme.value = currentTheme.value.name === lightTheme.name ? darkTheme : lightTheme
}
const bgColor = computed(() => `${currentTheme.value.common!.bodyColor}`)
</script>

<template>
  <n-config-provider :theme="currentTheme" :locale="zhCN" :date-locale="dateZhCN">
    <div
      flex justify-center gap-4 px-6 py-4 class="hello"
      :style="{ 'background-color': bgColor }"
    >
      <!-- Left -->
      <div flex flex-col w-full gap-6 pl-6 py-4 pr-4 rounded-md overflow-hidden shadow-lg shadow-blue-100>
        <div flex justify-between gap-4>
          <div flex items-center gap-4>
            <p font-semibold text-xl>
              {{ videoTitleInput }}
            </p>
            <n-icon size="16" color-gray-600>
              <edit />
            </n-icon>
          </div>

          <button px-4 py-2 rounded-md font-semibold text-sm class="bg-[#eef7fc] text-[#2c6c9f]">
            Show Summary
          </button>
        </div>

        <p v-if="loading">
          Loading...
        </p>
        <ul v-else flex flex-col gap-6>
          <content-card
            v-for="contentSlice in contentSlices"
            :key="contentSlice.id"
            :content-slice="contentSlice"
          />
        </ul>
      </div>

      <!-- Right -->
      <div flex-shrink-0 flex flex-col gap-4 px-6 pt-6 pb-8 rounded-md overflow-hidden shadow-lg shadow-blue-100>
        <video-player :options="videoOptions" rounded-md overflow-hidden />
        <div flex flex-col gap-1>
          <p font-semibold>
            10 interesting facts about mosquitoes
          </p>
          <p text-sm text-gray-600>
            https://www.youtube.com/...
          </p>
        </div>
        <div flex justify-between items-center>
          <button flex gap-2 items-center color-gray-400>
            <n-icon size="16">
              <microphone />
            </n-icon>
            <p>English</p>
          </button>
          <div flex gap-2 items-center color-gray-400>
            <n-icon size="16">
              <calendar-alt-regular />
            </n-icon>
            <p>{{ formattedTime }}</p>
          </div>
        </div>
        <button rounded-md px-4 py-3 font-semibold text-white bg-blue-500>
          Download PDF
        </button>
        <button font-semibold text-blue-500>
          Publish & Copy Link
        </button>
      </div>
    </div>
  </n-config-provider>
</template>
