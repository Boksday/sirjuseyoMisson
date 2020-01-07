<template>
<div>
  <v-btn color="primary" @click="goRouter('/contact/add')">연락처 추가</v-btn>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">사진</th>
          <th class="text-left">이름</th>
          <th class="text-left">전화번호</th>
          <th class="text-left">주소</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="contact" @click="getContact(contact.no)" v-for="( contact, index) in contacts.contacts" :key="index">
          <td><img :src="contact.photo" alt="" width="50px" height="50px"></td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>

          <td>
            <v-btn class="btn deleteBtn" color="error" @click.stop="onClickDeleteButton(contact.no)">삭제</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-container>
    <v-row justify="center" @click="goPage">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="totalPages"
            :total-visible="9"
            circle
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      page: 1,
      pagesize: 5
    }
  },
  computed: {
    ...mapState({
      contacts: (state) => state.contacts.contacts,
      contactDetail: (state) => state.contacts.contact
    }),

    totalPages () {
      const total = Math.ceil(this.contacts.totalcount / this.pagesize)
      return total > 0 ? total : 0
    }
  },
  methods: {
    ...mapActions(['getContacts', 'getContact', 'deleteContact']),

    getContact (no) {
      this.$router.push(`/contacts/${no}`)
    },
    onClickDeleteButton (no) {
      if (confirm('정말 삭제하시겠습니까?')) {
        this.deleteContact(no).then((res) => {
          this.$router.go()
        })
      }
    },
    goRouter (url) {
      this.$router.push(url)
    },
    goPage () {
      this.getContacts({
        pageno: this.page,
        pagesize: this.pagesize
      })
    }
  },
  created () {
    this.getContacts({
      pageno: this.page,
      pagesize: this.pagesize
    })
  }
}
</script>

<style scoped>
  .contact:hover {
    cursor: pointer;
  }

  .v-list-item {
    text-align: center;
    border : 1px #e1e1e1 solid;
    margin-bottom : 1px;
  }
</style>
