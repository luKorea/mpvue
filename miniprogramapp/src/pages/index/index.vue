<template>
	<div class="index-container">
    <img
      v-if="isShow"
      :src="userInfo.avatarUrl"
      alt="user avatar"
      class="index-image"
    >
    <Button
      v-else
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
    >
      获取用户信息
    </Button>
    <p class="index-name">欢迎: {{userInfo.nickName}}</p>
    <button class="index-btn" @tap="toList">开启小程序之旅</button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      userInfo: {},
      isShow: false
    }
  },
  methods: {
    // 获取用户信息
    getUser () {
      wx.getUserInfo({
        success: res => {
          this.userInfo = res.userInfo;
          this.isShow = true
        },
        fail: err => alert(`获取用户信息失败!!!${err.errMsg}`)
      })
    },
    // 获取用户授权信息
    getUserInfo(data) {
      if (data.mp.detail.rawData) this.getUser()
    },
    toList () {
      wx.switchTab({
        url: '/pages/list/main'
      })
    }
  },
  beforeMount () {
    this.getUser()
  }
}
</script>

<style>
  page, .index-btn, Button {
    background: #ECEDE8;
  }
  Button {
    margin-top: 250rpx;
  }
  .index-container {
    border-top: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index-image {
    margin-top: 300rpx;
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
  }
  .index-name, .index-btn {
    font-weight: bold;
  }
  .index-name {
    margin: 100rpx 0;
    font-size: 40rpx;
  }
  .index-btn {
    margin: 50rpx 0;
  }
</style>
