<template>
  <v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            IP address
          </th>
          <th class="text-center text-uppercase">
            DNS Host
          </th>
          <th class="text-center text-uppercase">
            Country
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in assets"
          :key="item.ip"
        >
          <td>{{ item.ip }}</td>
          <td class="text-center">
            {{ item.domain }}
          </td>
          <td class="text-center">
            {{ item.country }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const assets = [
      {
        ip: '1.1.1.1',
        domain: "159",
        country: "United States",
        
      },
      {
        ip: '1.1.1.2',
        domain: 237,
        
      },
      {
        ip: '1.1.1.3',
        domain: 262,
        
      },
      {
        ip: '1.1.1.4',
        domain: 305,
        
      },
      {
        ip: '1.1.1.5',
        domain: 356,
        
      },
    ]

    return {
      assets,
    }
  },
}
</script>
