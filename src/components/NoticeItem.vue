<template>
  <div style="border-bottom: 1px solid lightgray;padding:6px 0;background:white">
      <Flexbox class="notice-container" :justify="'center'" align="center">
        <FlexboxItem :span="3" >
            <img height="90" width="90" :src="img">
        </FlexboxItem>
        <FlexboxItem :span="9" style="margin:0" >
            <Flexbox orientation="vertical" class="content">
                <FlexboxItem class="title">防汛备勤通知</FlexboxItem>
                <FlexboxItem class="desc" style="margin:0;">
                    <span >发布单位:北排服务号</span>
                    <span >2018-03-21 09:00</span>
                </FlexboxItem>
            </Flexbox>
        </FlexboxItem>
      </Flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Cell } from "vux";
import img from "../assets/demo/4.jpg";

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Cell
  },
  data() {
    return {
      img
    };
  }
};
</script>

<style lang="less" scoped>
.notice-container {
  height: 2.4rem;
  padding:0 4px;
  background:white;
  overflow-x: hidden;
  box-sizing: border-box;
  & .content {
    width:100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  & .title {
    font-size: .5rem;
    width: 100%;
  }
  & .desc {
    font-size: .1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vux-flexbox .vux-flexbox-item{
    width:100%;
  }
  .vux-flexbox-item{
    height: 100%;
  }
}
</style>
