<template>
  <v-row>

    <v-col >
      <v-card>
        <v-card-title>Port scan</v-card-title>
        <v-card-text>
          Click on the scan button to initiate a scan for an IP-address.
        </v-card-text>
        <demo-simple-table-dense></demo-simple-table-dense>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card>
        <v-card-title>DNS records</v-card-title>
        <demo-simple-table-fixed-header></demo-simple-table-fixed-header>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DemoSimpleTableDense from './demos/portscan.vue'
import DemoSimpleTableFixedHeader from './demos/dns.vue'

export default {
  components: {
  
    DemoSimpleTableDense,
    DemoSimpleTableFixedHeader,
  },
  setup() {
    return {}
  },
}
</script>
