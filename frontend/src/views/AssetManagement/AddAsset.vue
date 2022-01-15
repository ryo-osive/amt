<template>
  <div>
    <v-form>
      <v-card flat outlined>
        <v-card-title>
          <span class="headline">Add Assets</span>
        </v-card-title>
        <v-card-text>
          <v-col>
            <v-text-field v-model="ipAddress" label="IP Address" required></v-text-field>
            <v-text-field v-model="TagID" label="TAG Id" required></v-text-field>
            <v-radio-group v-model="radio" required :rules="radioRules" row>
              <v-radio label="SSH Key" value="sshKey"></v-radio>
              <v-radio label="Password" value="sshPassword"></v-radio>
            </v-radio-group>
            <v-text-field v-model="authKey" type="password" label="Auth Key"></v-text-field>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addAsset">Add Asset</v-btn>
          <v-btn color="secondary" @click="showAssetDialog = !showAssetDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'AddAsset',
  data() {
    return {
      key: value,
    }
  },
  props: {
    showAssetDialog: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>