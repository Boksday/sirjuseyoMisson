<template>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link @click="goRouter('/')">

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="goRouter('/contacts')">
          <v-list-item-content>
            <v-list-item-title >연락처</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

  methods: {
    goRouter (url) {
      this.$router.push(url)
    }
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style scoped>
  .v-list-item {
    text-align: center;
    border : 1px #e1e1e1 solid;
    margin-bottom : 1px;
  }
</style>
