<template>
  <div class="listDetails-container">
    <img
      class="listDetails-header"
      :src="listObj.detail_img" alt="">
    <div class="listDetails-date">
      <img :src="listObj.avatar" alt="">
      <span>{{listObj.author}}</span>
      <span>发布于</span>
      <span>{{listObj.date}}</span>
    </div>
    <p class="listDetails-company">{{listObj.title}}</p>
    <div class="listDetails-share-container">
      <div class="listDetails-collection-share">
        <img
          :src="isCollected ? '/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'"
          alt=""
          @tap="handleCollected"
        >
        <img
          src="/static/images/icon/share-anti.png"
          alt=""
          @tap="handleShare"
        >
      </div>
      <div class="line"></div>
    </div>
    <button open-type="share">转发此文章</button>
    <p class="listDetails-content">{{listObj.detail_content}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "list_detail",
    data() {
      return {
        listObj: {},
        id: '',
        isCollected: false  // 标识是否收藏
      }
    },
    beforeMount() {
      this.id = this.$mp.query.id;
      //  预处理，初始化界面，无任何缓存
      let oldStorage = wx.getStorageSync('isCollected');
      if (!oldStorage) {
        wx.setStorage({
          key: 'isCollected',
          data: {}
        })
      } else {
        this.isCollected = !!oldStorage[this.id]
      }
    },
    mounted() {
      this.listObj = this.list[this.id];
    },
    computed: {
      ...mapState(['list'])
    },
    methods: {
      handleCollected() {
        this.isCollected = !this.isCollected;
        let title = this.isCollected ? '收藏成功' : '取消收藏';
        wx.showToast({
          title,
          icon: 'success'
        });
        //  读取缓存的状态
        let oldStorage = wx.getStorageSync('isCollected');
        oldStorage[this.id] = this.isCollected;
        //  将本次设置的结果再缓存到本地
        wx.setStorage({
          key: 'isCollected',
          data: oldStorage
        })
      },
      // 分享页面
      handleShare() {
        wx.showActionSheet({
          itemList: ['分享到朋友圈', '分享给好友', '分享到QQ空间'],
          success (res) {
            wx.showToast({
              title: '分享成功',
              icon: 'success'
            })
          },
          fail (res) {
            wx.showToast({
              title: '取消分享',
              icon: 'error'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .listDetails-container {
    display: flex;
    flex-direction: column;
  }

  .listDetails-header {
    width: 100%;
    height: 460rpx;
  }

  .listDetails-date img {
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
  }

  .listDetails-date span {
    font-weight: 28rpx;
    margin-left: 6rpx;
  }

  .listDetails-company {
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
  }

  .listDetails-share-container {
    position: relative;
  }

  .listDetails-collection-share {
    float: right;
    margin-right: 30rpx;
  }

  .listDetails-collection-share img {
    width: 90rpx;
    height: 90rpx;
    margin-right: 20rpx;
  }

  .line {
    position: absolute;
    top: 45rpx;
    left: 5%;
    width: 96%;
    height: 1rpx;
    background-color: #ccc;
    z-index: -1;
  }

  .listDetails-content {
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 3rpx;
    line-height: 50rpx;

  }

</style>
