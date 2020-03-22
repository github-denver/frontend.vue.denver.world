<template>
  <div class="wrap_welcome">
    <h1 class="title_local">
      <router-link :to="{ name: 'Main' }" class="link_local">소담</router-link>
    </h1>

    <div class="inner_welcome">
      <strong class="title_welcome">내 정보</strong>
      <p class="description_welcome">수정할 정보를 입력해주세요!</p>

      <update
        :isAuthorized="isAuthorized"
        :profile="user"
        @parentSubmit="onSubmit"
      />
    </div>
  </div>
  <!-- // welcome -->
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Update from '@/components/member/update/Update'
import api from '@/api'

export default {
  name: 'ProfileUpdate',
  components: { Update },
  computed: {
    ...mapGetters(['isAuthorized']),
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['updateProfile']),
    onSubmit(payload) {
      this.updateProfile(payload)
        .then(() => {
          alert('회원정보 수정에 성공했어요!')
        })
        .catch((error) => {
          alert('회원가입에 실패했어요.. ㅠㅜ')

          console.error(error)
        })
    }
  }
}
</script>
