<template>
  <div class="video">
    <div class="video-item">
      <!-- <video src="../assets/Ready Player One.mp4" width="100%" height="200px" controls></video> -->
      <p class="desc">
        <span>视频名称:头号玩家</span>
        <span>时间:2018-03-04</span>
      </p>
    </div>
    <div class="video-item">
      <!-- <video src="../assets/Ready Player One.mp4" width="100%" height="200px" controls></video> -->
      <p class="desc">
        <span>视频名称:头号玩家</span>
        <span>时间:2018-03-04</span>
      </p>
    </div>
    <div class="video-item">
      <!-- <video src="../assets/Ready Player One.mp4" width="100%" height="200px" controls></video> -->
      <p class="desc">
        <span>视频名称:头号玩家</span>
        <span>时间:2018-03-04</span>
      </p>
    </div>
  </div>
</template>

<script>
import {
  ButtonTab,
  ButtonTabItem,
  XTable
} from "vux";

// import video from '../assets/Ready Player One.'

export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    XTable
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
.video{
  & .video-item{
    margin-bottom: .1rem;
    & .desc {
      padding:0 .2rem;
      display: flex;
      justify-content: space-between;
      font-size:.2rem;
    }
  }
}

</style>
