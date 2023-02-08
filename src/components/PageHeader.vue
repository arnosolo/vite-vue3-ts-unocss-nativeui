<script setup lang="ts">
import { NAvatar, NButton, NConfigProvider, NDatePicker, NDropdown, NIcon } from 'naive-ui'
import { AngleDown, Crown } from '@vicons/fa'
import { router } from '@src/router'

const options = [
  // {
  //   label: 'Marina Bay Sands',
  //   key: 'marina bay sands',
  //   disabled: true,
  // },
  {
    label: 'Profile',
    key: '/profile',
  },
  {
    label: 'Help',
    key: '/help',
  },
  {
    label: 'Billing',
    key: '/billing',
  },
]
function handleSelect(key: string) {
  router.push(key)
}
</script>

<template>
  <div h-16 w-full>
    <div fixed w-full z-99 h-16 flex justify-between items-center shadow-md shadow-gray-100>
      <div pl-4>
        <img src="../assets/logo.png" alt="logo" w-36 h-fit>
      </div>
      <p text-gray-500>
        Back to My Projects
      </p>
      <div flex items-center gap-6 pr-4>
        <div flex gap-1 items-center color-yellow-500>
          <n-icon size="16">
            <crown />
          </n-icon>
          <p>Upgrade to Premium</p>
        </div>
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <div flex gap-1 items-center>
            <n-avatar
              round
              size="small"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <p>Paul Mitchal</p>
            <n-icon size="16">
              <angle-down />
            </n-icon>
          </div>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
