<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>Alerts</v-card-title>
        <demo-simple-table-basic></demo-simple-table-basic>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import DemoSimpleTableBasic from './Alerttop.vue'
export default {
  components: {
    DemoSimpleTableBasic,
    },
  setup() {
    return {}
  },
}
</script>