<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Operating System Distribution</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">
      <span class="font-weight-semibold text--primary me-1"> Based on quantity</span>
  
    </v-card-subtitle>

    <v-card-text>
        <v-row
          v-for="data in statisticsData"
          :key="data.title"
         >
         <br>
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation (data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation (data.title).icon }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total }}
            </h3>
          </div>
        </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiApple , mdiMicrosoftWindows, mdiTrendingUp, mdiDotsVertical, mdiLinux  } from '@mdi/js'

export default {
  setup() {
    const statisticsData = [
      {
        title: 'Windows',
        total: '4',
      },
      {
        title: 'Mac',
        total: '3',
      },
      {
        title: 'Linux',
        total: '7',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'Windows') return { icon: mdiMicrosoftWindows, color: 'primary' }
      if (data === 'Mac') return { icon: mdiApple , color: 'success' }
      if (data === 'Linux') return { icon: mdiLinux , color: 'warning' }

      return { icon: mdiMicrosoftWindows, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiMicrosoftWindows,
        mdiLinux,
        mdiApple,
      },
    }
  },
}
</script>
<style>
.row + .row{
  margin-top: 25px;
}
</style>