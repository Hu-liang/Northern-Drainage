
<template>
  <div style="height:100%" class="publish-container">
    <group title="">
      <x-input title="通知标题" required v-model="title" name="title" placeholder="请输入通知标题" ></x-input>
    </group>
    <!-- <group title="">
      <x-input title="备勤令期号" required v-model="date" name="date" placeholder="请输入通知标题" ></x-input>
    </group> -->
    <group title="通知内容">
      <x-textarea required name="content" v-model="content" placeholder="请输入通知内容"></x-textarea>
    </group>
    <div class="btn-container">
      <x-button class="btn-submit" type="primary" action-type="button" @click.native="submit">提交</x-button>
    </div>
  </div>
</template>

<script>
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
import axios from 'axios'
import moment from 'moment'

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
      title: "",
      date: "",
      content: ""
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    submit() {
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
      axios.post('/preparation/notice/save',{
        preparationTitle:this.title,
        preparationContent:this.content,
        // preparationVersion:null,
        crate_date:moment().format('YYYY-MM-DD'),
        created_by:-1,
        created_unit:-1
      }).then((res)=>{
        this.showSuccess('添加成功')
      }).catch(()=>this.showWarn('添加失败'))
    },
    showWarn(field) {
      this.$vux.toast.show({
        text: `${field}`,
        type: "warn"
      });
    },
    showSuccess(field){
      this.$vux.toast.show({
        text: `${field}`,
        type: "success"
      });
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    isTabbarDemo() {
      return /tabbar/.test(this.route.path);
    },
    componentName() {
      if (this.route.path) {
        const parts = this.route.path.split("/");
        if (/component/.test(this.route.path) && parts[2]) return parts[2];
      }
    }
  }
};
</script>

<style lang="less">
.publish-container {
  background: #efeef3;
  .btn-submit {
    background: #3b80cd;
  }
  .btn-container {
    padding: 18px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 18px;
  }
}
</style>
