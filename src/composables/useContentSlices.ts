import { onMounted, ref } from 'vue'

export interface ContentSlice {
  id: string
  startSecond: number
  endSecond: number
  text: string
  image: string
  imageAlt: string
}

export function useContentSlices() {
  const contentSlices = ref<ContentSlice[]>([])
  const loading = ref(false)

  onMounted(() => {
    loading.value = true
    setTimeout(() => {
      contentSlices.value = [
        {
          id: '1',
          startSecond: 0,
          endSecond: 120,
          text: '<p>Alamofire is a swift http request lib.</p><p>By default, we need use completion handler to handle response.</p><p>Today we are going to find out how to use it with async and await.</p>',
          image: '/vite-vue3-ts-unocss-nativeui/Snipaste_2023-02-08_20-47-19.png',
          imageAlt: 'hi',
        },
        {
          id: '2',
          startSecond: 120,
          endSecond: 240,
          text: '<p>And we will learn how to achieve this by fetching a appliance list from this url. It\'s provided by random-data-api.com</p><p>First we should create an new iOS project in XCode, and install Alamofire in our project with Swift package manger</p><p>And the job is done. Source code</p>',
          image: '/vite-vue3-ts-unocss-nativeui/Snipaste_2023-02-08_21-22-09.png',
          imageAlt: 'hello',
        },
      ]
      loading.value = false
    }, 1000)
  })

  return {
    contentSlices,
    loading,
  }
}
