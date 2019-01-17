<template>
  <div class="home">
    <div class="index-progress">
        <img class="badge" src="@/assets/images/index/badge.png" />
        <img class="logo" src="@/assets/images/index/logo.png" />
        <div class="progress-bar">
            <div class="progress" v-bind:style="{ width: progress + '%' }"></div>
        </div>
        <p class="loading-progress">正在加载...<span class="loading-number">{{progress}}</span>%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      progress: 0
    }
  },
  methods: {
    addProress: (progress)=>{
      console.log(progress)
      return ++progress;
    }
  },
  mounted: function(){
    //进度条
    let inter = setInterval(() => {
      if(this.progress < 100)
        this.progress = this.addProress(this.progress)
      else
        clearInterval(inter)
    }, 10);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./Home.scss";
</style>
