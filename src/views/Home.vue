<script setup lang="ts">
import HelloWorld from '@src/components/HelloWorld.vue'
import type { GlobalTheme } from 'naive-ui'
import { NButton, NConfigProvider, NDatePicker, NInput, NSpace } from 'naive-ui'
// theme
// import { createTheme, datePickerDark, inputDark } from 'naive-ui'
import { darkTheme, lightTheme } from 'naive-ui'
// locale & dateLocale
import { dateZhCN, zhCN } from 'naive-ui'
import { computed, ref } from 'vue'

// const darkTheme = createTheme([inputDark, datePickerDark])
const currentTheme = ref<GlobalTheme>(lightTheme)
function toggleTheme() {
  currentTheme.value = currentTheme.value.name === lightTheme.name ? darkTheme : lightTheme
}
const bgColor = computed(() => `${currentTheme.value.common!.bodyColor}`)
</script>

<template>
  <div :style="{ 'background-color': bgColor }">
    <n-config-provider :theme="currentTheme" :locale="zhCN" :date-locale="dateZhCN">
      <div flex justify-center>
        <div flex flex-col items-center w-full max-w-6xl py-10>
          <div flex justify-center gap-4>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" w-20 alt="Vite logo">
            </a>
            <a href="https://vuejs.org/" target="_blank">
              <img src="../assets/vue.svg" w-20 alt="Vue logo">
            </a>
            <a href="https://www.naiveui.com/en-US/dark" target="_blank">
              <img src="../assets/naive-ui.svg" w-16 alt="naive-ui logo">
            </a>
          </div>
          <div flex>
            <div flex flex-col gap-4 pt-4>
              <n-button @click="toggleTheme">
                toggleTheme
              </n-button>
              <n-input />
              <n-date-picker />
            </div>
          </div>
        </div>
      </div>
    </n-config-provider>
  </div>
</template>

<style scoped>

</style>
