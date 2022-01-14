<template>
<v-content>
  <v-row>
      <v-col
        col="12"
        md="4"
      >
        <Welcome></Welcome>
      </v-col>
  </v-row>
  <v-row>
  
    <v-col
      cols="12"
      md="8"
    >
      <OSdist></OSdist>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <Domaingroup></Domaingroup>
    </v-col>
  </v-row>
  </v-content>
</template>

<script>
import Welcome from './Welcome.vue'
import OSdist from './OSdist.vue'
import Domaingroup from './Domaingroup.vue'

export default {
  components: {
    Welcome,
    OSdist,
    Domaingroup,
  },
  
}
</script>
