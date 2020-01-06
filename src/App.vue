<template>
  <v-app id="inspire">
        <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>

          <v-list-item-content>
            <v-list-item-title @click="goRouter('/')">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title @click="goRouter('/contacts')">연락처</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>연락처 Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout class="layout-wrapper" justify-center>
          <div style="min-width: 900px;">
            <router-view></router-view>
          </div>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {

  data () {
    return {
      drawer: null
    }
  },
  methods: {
    goRouter (url) {
      this.$router.push(url)
    }
  },
  props: {
    source: String
  }
}
</script>
