<template>
<div>
  <v-btn color="primary" @click="goRouter('/addContact')">연락처 추가</v-btn>
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
        <tr class="contact" @click="getContact(contact.no)" v-for="( contact, index) in contactList.contacts" :key="index">
          <td><img :src="contact.photo" alt="" width="50px" height="50px"></td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td> <v-btn class="btn deleteBtn" color="error" @click.stop="delContact(contact.no)">삭제</v-btn> </td>
        </tr>
      </tbody>
    </template>

  </v-simple-table>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  computed: {
    ...mapState({
      contactList: (state) => state.contacts.contacts,
      contactDetail: (state) => state.contacts.contact
    })
  },
  methods: {
    ...mapActions(['getContacts', 'getOneContact', 'deleteContact']),

    getContact (no) {
      this.$router.push('/contacts/' + no)
    },
    delContact (no) {
      if (confirm('정말 삭제하시겠습니까?')) {
        this.deleteContact(no).then((res) => {
          this.$router.go()
        })
      }
    },
    goRouter (url) {
      this.$router.push(url)
    }
  },
  created () {
    this.getContacts()
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
