
<template>
  <div style="height:100%">
    <div class="water-publish-container">
      <div class="list" >
        <section class="left">
          <div>首都机场突降暴雨造成大面积积水</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/motorcycle.png" height="72px"/>
        </section>
      </div>
      <div class="list" >
        <section class="left">
          <div>城市各区积水路段汇总</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/plane.png" height="72px"/>
        </section>
      </div>
      <div class="list" >
        <section class="left">
          <div>四环的四惠桥</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/motorcycle.png" height="72px"/>
        </section>
      </div>
      <div class="list" >
        <section class="left">
          <div>首都机场突降暴雨造成大面积积水</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/motorcycle.png" height="72px"/>
        </section>
      </div>
      <div class="list" >
        <section class="left">
          <div>城市各区积水路段汇总</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/plane.png" height="72px"/>
        </section>
      </div>
      <div class="list" >
        <section class="left">
          <div>四环的四惠桥</div>
          <div class="desc">18-03-21 08:00</div>
          <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div>
        </section>
        <section>
          <img src="../assets/motorcycle.png" height="72px"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import plane from '../assets/plane.png'
import {
  Group,
  Cell,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Tab,
  TabItem,
  Flexbox,
  FlexboxItem,
  Panel,
  XInput,
  XButton,
  XTextarea
} from "vux";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import moment from "moment";

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Panel,
    XInput,
    XButton,
    XTextarea
  },
  data() {
    return {
      list:[]
    };
  },
  created(){
    this.fetch()
  },
  methods: {
    fetch() {
      axios.get("/ponding/getAll")
        .then(res => {
          this.list = res.data
        })
    },
    showWarn(field) {
      this.$vux.toast.show({
        text: `${field}`,
        type: "warn"
      });
    },
    showSuccess(field) {
      this.$vux.toast.show({
        text: `${field}`,
        type: "success"
      });
    }
  }
};
</script>

<style lang="less">
.water-publish-container {
  & .list {
    padding:10px;
    display: flex;
    width: 100%;
    height: 2.2rem;
    font-size: 14px;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    & .left{
      flex: 0 0 80%;
      & .desc{
        color:#9092A5;
      }
      & .info{
        padding: 6px 0;
      }
      & strong{
        color:crimson;
      }
    }
  }
}
</style>
