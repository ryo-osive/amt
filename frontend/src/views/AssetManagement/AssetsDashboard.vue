<template>
  <div>
    <v-row>
      <v-col cols="1">
        <v-btn
          @click="
            {
              {
                showAddAssetialog = !showAddAssetialog
              }
            }
          "
          small
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>{{ this.asset_add_icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>{{ this.asset_scan_icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>{{ this.asset_edit_icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>{{ this.asset_delete_icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>{{ this.asset_refresh_icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="assetsList"
      item-key="name"
      show-select
      class="elevation-1"
    >
    </v-data-table>
    <v-dialog v-model="showAddAssetialog" max-width="600px">
      <AddAsset />
    </v-dialog>
  </div>
</template>

<script>
import { mdiEyePlusOutline, mdiSkullScanOutline, mdiMonitorEdit, mdiDelete, mdiRefresh } from '@mdi/js'
import AddAsset from './AddAsset.vue'
export default {
  name: 'AssetsDash',
  data() {
    return {
      asset_add_icon: mdiEyePlusOutline,
      asset_scan_icon: mdiSkullScanOutline,
      asset_edit_icon: mdiMonitorEdit,
      asset_delete_icon: mdiDelete,
      asset_refresh_icon: mdiRefresh,
      showAddAssetialog: false,
      headers: [
        {
          text: 'IP Address',
          value: 'ipAddress',
        },
        {
          text: 'TAG Id',
          value: 'TagID',
        },
        {
          text: 'Status',
          value: 'status',
        },
        {
          text: 'Last Scan',
          value: 'lastScan',
        },
        {
          text: 'Last Seen',
          value: 'lastSeen',
        },
      ],
      assetsList: [
        {
          ipAddress: '',
          TagID: '',
          status: '',
          lastScan: '',
          lastSeen: '',
        },
      ],
      assets: [
        {
          id: '',
          ip: '',
        },
      ],
    }
  },
  components: {
    AddAsset,
  },
}
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 10px;
  margin-left: 0px;
}
.v-col {
  margin: 10px;
}
</style>