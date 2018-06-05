<template>
  <div style="height:100%" class="radar">
    
  <br/>

  <div class="swiper" v-if="radars.length>0">
    <p>{{index+1}}/{{radars.length}}</p>
    <img :src="radars[index].fileUri" width="100%"/>
  </div>    

  <br/>

  <div>
    <Flexbox orient="vertical" justify="center" direction="row" style="text-align:center;">
      <FlexboxItem @click.native="go(-1)" :span="4" >
        <Icon :iconClass="'left'" style="height:20px;width:20px;"></Icon>
      </FlexboxItem>
      <FlexboxItem @click.native="clear()" :span="4" >
        <Icon :iconClass="'bofang'" style="height:40px;width:40px;"> </Icon>
      </FlexboxItem>
      <FlexboxItem @click.native="go(1)" :span="4" >
        <Icon :iconClass="'right'" style="height:20px;width:20px;"></Icon>
      </FlexboxItem>
    </Flexbox>
  </div>
    
  </div>
</template>

<script>
import { Swiper, XButton, Tab, TabItem, Flexbox, FlexboxItem } from "vux";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import moment from "moment";
import Icon from "../components/Icon";
import _ from "lodash";
import { setInterval, clearInterval } from "timers";

const baseList = [
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg"
  },
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg"
  },
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];

export default {
  components: {
    Swiper,
    Tab,
    TabItem,
    XButton,
    Flexbox,
    FlexboxItem,
    Icon
  },
  data() {
    return {
      msg: "Hello World!",
      // list: baseList,
      index: 0,
      current: null,
      radars: [],
      timer: null
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      //WEATHER_LDHB
      //fileUri
      axios.get("/weatherfile/getAll").then(res => {
        const data = res.data;
        this.radars = _.filter(data, el => el.fileType === "WEATHER_LDHB");
        this.tick();
      });
    },
    go(type) {
      this.index += type 
    },
    tick(number = 1000) {
      this.timer = setInterval(() => {
        this.index = this.index == this.radars.length - 1 ? 0 : this.index + 1;
      }, number);
    },
    clear() {
      // debugger;
      this.timer ? this.timer =  clearInterval(this.timer) : this.tick()
    }
  }
};
</script>

<style lang="less">
.radar {
  font-size: 14px;
  text-align: center;
}
</style>
