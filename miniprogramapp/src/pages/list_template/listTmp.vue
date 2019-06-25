<template>
	<div class="tmp-container" @tap="toDetail(index)">
    <div class="tmp-date">
      <img :src="item.avatar" alt="">
      <span>2019</span>
    </div>
    <h4 class="tmp-company">{{item.title}}</h4>
    <img class="tmp-detail" :src="item.detail_img" alt="">
    <p class="tmp-content">{{item.detail_content}}</p>
    <div class="tmp-collection">
      <img :src="item.detail_love_image1" alt="">
      <span>{{item.love_count}}</span>
      <img :src="item.detail_love_image2" alt="">
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>
`
<script>
export default {
  name: "listTmp",
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toDetail (index) {
      wx.navigateTo({
        url: '/pages/list_details/main?id=' + index
      })
    }
  }
}
</script>

<style>
  .tmp-container {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5rpx;
  }

  .tmp-date {
    padding: 10rpx;
  }

  .tmp-date span {
    font-size: 30rpx;
  }

  .tmp-date img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }

  .tmp-company {
    padding: 20rpx;
  }

  .tmp-detail {
    width: 100%;
    height: 460rpx;
  }

  .tmp-content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
  }

  .tmp-collection img {
    width: 32rpx;
    height: 32rpx;
    margin-left: 22rpx;
    vertical-align: middle;
  }

  .tmp-collection span {
    margin-left: 10rpx;
  }

</style>
