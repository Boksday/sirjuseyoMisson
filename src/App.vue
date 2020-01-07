<template>
  <v-app id="inspire">
    <Aside />
    <Header />

    <v-content>
      <v-container fluid fill-height>
        <v-layout class="layout-wrapper" justify-center>
          <div style="min-width: 900px;">
            <router-view></router-view>
          </div>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Aside from './js/components/layout/Aside'
import Header from './js/components/layout/Header'
import Footer from './js/components/layout/Footer'

export default {
  components: {
    Aside, Header, Footer
  },
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
