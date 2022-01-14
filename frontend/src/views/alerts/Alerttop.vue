<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Alert
          </th>
          <th class="text-center text-uppercase">
            Severity
          </th>
          <th class="text-center text-uppercase">
            Logged time
          </th>
          <th class="text-center text-uppercase">
            Asset
          </th>
          <th class="text-center text-uppercase">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in alerts"
          :key="item.alert"
          >
          <td>{{ item.alert }}</td>
          <td class="text-center">
            {{ item.severity }}
          </td>
          <td class="text-center">
            {{ item.loggedtime }}
          </td>
          <td class="text-center">
            {{ item.asset }}
          </td>
          <td class="text-center">
            {{ item.details }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const alerts = [
      {
        alert: 'Broken auth',
        severity: "High",
        loggedtime: "6:00",
        asset: "01",
        details: "<button>",
      },
      {
        alert: 'Broken auth',
        severity: "High",
        loggedtime: "6:00",
        asset: "01",
        details: "<button>",
      },
      {
        alert: 'Broken auth',
        severity: "High",
        loggedtime: "6:00",
        asset: "01",
        details: "<button>",
      },
      {
        alert: 'Broken auth',
        severity: "High",
        loggedtime: "6:00",
        asset: "01",
        details: "<button>",
      },
      
      
    ]

    return {
      alerts,
    }
  },
}
</script>
