<template>
	<div class="movies-details-container">
    <img :src="list.images.large" alt="">
    <h2 class="movies-details-name">{{list.original_title}}</h2>
    <div class="movies-detail-content">
      <span>评分：{{list.rating.average}}</span>
      <span>导演：{{list.directors[0].name}}</span>
      <span>主演：{{list.casts[0].name}} {{list.casts[1].name}} {{list.casts[2].name}}</span>
    </div>
    <button>点击观影</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "movies_details",
  data() {
    return {
      list: {}
    }
  },
  computed: {
    ...mapState(['movies'])
  },
  beforeMount() {
    this.list = this.movies[this.$mp.query.index];
    console.log(this.list);
  }
}
</script>

<style>

  .movies-details-container {
    display: flex;
    flex-direction: column;
  }

  .movies-details-container img {
    width:70%;
    height:700rpx;
    margin:50rpx auto;
  }

  .movies-details-name {
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
  }

  .movies-detail-content {
    display: flex;
    flex-direction: column;
    margin-left:20%;
    margin-top: 30rpx;
    line-height: 50rpx;
    font-size: 26rpx;
  }

  button {
    width:70%;
    height:80rpx;
    background: green;
    line-height: 80rpx;
    color: #fff;
    font-size: 28rpx;
    margin-top: 20rpx;
  }

</style>
