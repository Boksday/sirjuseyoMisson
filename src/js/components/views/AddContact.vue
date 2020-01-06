<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
                <v-text-field v-model="name" label="Name"></v-text-field>
            </v-col>

            <v-col class="px-0">
              <v-text-field v-model="tel" label="Tel"></v-text-field>
            </v-col>

            <v-col class="px-0">
              <v-text-field v-model="address" label="Address"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions class="align-end">
            <v-spacer/>
            <v-btn color="primary" @click="add">생성</v-btn>
            <v-btn class="btn deleteBtn" color="error" @click="goRouter('/contacts')">취소</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      name: '',
      tel: '',
      address: ''
    }
  },
  methods: {
    ...mapActions(['addContact']),
    add () {
      const contact = {
        name: this.name,
        tel: this.tel,
        address: this.address
      }
      this.addContact(contact).then((res) => {
        if (res) {
          console.log(res)
          this.$router.push('/contacts')
        }
      })
    },
    goRouter (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
    .v-sheet{
        padding:10px;
    }
</style>
