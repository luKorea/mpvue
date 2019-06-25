<template>
  <div>
	<div
    class="movies-container"
    v-for="(item, index) in list"
    :key="index"
    @tap="toDetails(index)"
  >
      <img :src="item.images.large" alt="">
      <div class="movies-content">
        <h3 class="movies-name">{{item.original_title}}</h3>
        <p class="movies-year">年份:  {{item.year}}</p>
        <p class="movies-author">导演: {{item.directors[0].name}}</p>
      </div>
      <span class="movies-grade">{{item.rating.average}}</span>
    </div>
  </div>
</template>

<script>
let BASR_URL = 'http://t.yushu.im/v2/movie/top250';
export default {
  name: "movies",
  data () {
    return {
      list: []
    }
  },
  beforeMount() {
    this.$fly.get(BASR_URL)
      .then(res => {
        this.list = res.data.subjects;
        this.$store.dispatch('getMovies', this.list);
      }).catch(err => console.log(err))
  },
  methods: {
    toDetails(index) {
      wx.navigateTo({
        url: '/pages/movies_details/main?index=' + index
      })
    }
  }
}
</script>

<style>

  .movies-container {
    display: flex;
    padding: 10rpx;
    border-bottom: 1px solid #ccc;
  }

  .movies-container img {
    width: 120rpx;
    height: 120rpx;
    margin-right: 20rpx;
  }

  .movies-content {
    width: 70%;
  }

  .movies-name {
    font-size: 32rpx;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movies-year {
    font-size: 28rpx;
    color: #999;
    margin: 5rpx 0;
  }

  .movies-author {
    font-size: 30rpx;
    color: #666;
  }

  .movies-grade {
    color: #FF0000;
  }

</style>
