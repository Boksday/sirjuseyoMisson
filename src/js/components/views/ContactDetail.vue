<template>
  <v-card
    v-if="contact"
    class="d-inline-block mx-auto"
    min-width="500px">
    <v-container>
      <v-row>
        <v-col cols="auto">
            <v-img :src="contact.photo" width="200px" height="200px"></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
                <v-icon>mdi-account</v-icon> {{contact.name}}
            </v-col>

            <v-col class="px-0">
              <v-icon>mdi-map-marker</v-icon> {{contact.address}}
            </v-col>

            <v-col class="px-0">
              <v-icon>mdi-phone</v-icon> {{contact.tel}}
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions class="align-end">
            <v-spacer/>
            <v-btn color="primary" @click="goRouter('/contacts')">목록</v-btn>
            <v-btn class="btn deleteBtn" color="error" @click="onClickDeleteButton(contact.no)">삭제</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      contact: (state) => state.contacts.contact
    })
  },
  methods: {
    ...mapActions(['getContact', 'deleteContact']),
    goRouter (url) {
      this.$router.push(url)
    },
    onClickDeleteButton (no) {
      if (confirm('정말 삭제하시겠습니까?')) {
        this.deleteContact(no).then((res) => this.$router.push('/contacts'))
      }
    }
  },
  created () {
    this.getContact(this.$route.params.no)
  }
}
</script>
