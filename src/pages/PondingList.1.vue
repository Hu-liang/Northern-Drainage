
<template>
  <div style="height:100%">
    <div class="water-publish-container">
      <div class="list" v-for="(el,index) in data" :key="index">
        <section class="left" >
          <!-- <div>首都机场突降暴雨造成大面积积水</div> -->
          <div>{{el.floodPreventionTitle}}</div>
          <!-- <div class="desc">18-03-21 08:00</div> -->
          <div class="desc" @click="redirect(el.floodPreventionLink)">{{el.floodPreventionLink}}</div>
          <!-- <div class="desc info">
            <span>积水深度:<strong>3m</strong> </span>
            <span>积水面积:<strong>3㎡ </strong></span>
          </div> -->
        </section>
        <!-- <section>
          <img src="../assets/motorcycle.png" height="72px"/>
        </section> -->
      </div>
      <!-- <div class="list" >
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
      </div> -->
      
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
  XTextarea,
  XHeader
  
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
    XTextarea,
  XHeader
  },
  data() {
    return {
      title: "",
      date: "",
      content: "",
      data:[]
    };
  },
  created(){
    this.fetch()
  },
  methods: {
    fetch(){
      axios.get("/floodprevention/brochure/getAll").then(res => {
        // this.data3 = res.data;
        this.data = res.data
      });
    },
    onImgError(item, $event) {
      console.log(item, $event);
    },
    submit() {
      return false;
      if (!this.title) {
        this.showWarn("标题不能为空");
        return false;
      }
      // if (!this.date) {
      //   this.showWarn("备勤令期号不能为空");
      //   return false;
      // }
      if (!this.content) {
        this.showWarn("内容不能为空");
        return false;
      }
      axios
        .post("/preparation/notice/save", {
          preparationTitle: this.title,
          preparationContent: this.content,
          // preparationVersion:null,
          crate_date: moment().format("YYYY-MM-DD"),
          created_by: -1,
          created_unit: -1
        })
        .then(res => {
          this.showSuccess("添加成功");
        })
        .catch(() => this.showWarn("添加失败"));
    },
    redirect(url){
      window.location.href = url 
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
    // height: 2.2rem;
    height: 1.5rem;
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
