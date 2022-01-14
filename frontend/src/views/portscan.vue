<template>
  <v-row>
    <v-col cols="12">
      <v-card loading>
        <v-card-title >Scanned port result for {{ ip-address }} </v-card-title>
      </v-card>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <v-simple-table>
            <thead>
                <tr>
                <th class="text-uppercase">
                    port
                </th>
                <th class="text-center text-uppercase">
                    type
                </th>
                <th class="text-center text-uppercase">
                    status
                </th>
                <th class="text-center text-uppercase">
                    service
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in assets"
                :key="item.port"
                >
                <td>{{ item.port }}</td>
                <td class="text-center">
                    {{ item.type }}
                </td>
                <td class="text-center">
                    {{ item.status }}
                </td>
                <td class="text-center">
                    {{ item.service }}
                </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-col>
     </v-row>
</template>

<script>
export default {
  setup() {
    const assets = [
      {
        port: '22',
        type: 'UDP/tcp',
        status: 'filtered/open',
        service: 'ssh',
      },
      {
        port: '22',
        type: 'UDP/tcp',
        status: 'filtered/open',
        service: 'ssh',
      },{
        port: '22',
        type: 'UDP/tcp',
        status: 'filtered/open',
        service: 'ssh',
      },{
        port: '22',
        type: 'UDP/tcp',
        status: 'filtered/open',
        service: 'ssh',
      },
    ]

    return {
      assets,
    }
  },
}
</script>
