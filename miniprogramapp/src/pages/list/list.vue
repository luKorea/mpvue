<template>
	<div class="list-swipe">
      <swiper
        indicator-dots="true"
        indicator-color="green"
        indicator-active-color="deeppink"
        circular
        autoplay
        interval='3000'
      >
        <swiper-item>
          <img data-detailId="1" src='/static/images/detail/carousel/01.jpg' alt="" />
        </swiper-item>
        <swiper-item>
          <img data-detailId="0" src='/static/images/detail/carousel/02.jpg' alt=""/>
        </swiper-item>
        <swiper-item>
          <img data-detailId="2" src='/static/images/detail/carousel/03.jpg' alt=""/>
        </swiper-item>
        <swiper-item>
          <img data-detailId="3" src='/static/images/detail/carousel/04.jpg' alt=""/>
        </swiper-item>
      </swiper>
    <list-tmp
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import ListTmp from '../list_template/listTmp'
import {mapState, mapActions} from 'vuex'
export default {
  name: "list",
  components: {
    ListTmp
  },
  beforeMount() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style>
  .list-swipe {
    width: 100%;
    height: 400rpx;
  }
  .list-swipe swiper img {
    width: 100%;
    height: 100%;
  }
</style>
