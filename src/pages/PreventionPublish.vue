
<template>
  <div style="height:100%">
    <div class="flood-list-container">
      <group title="" >
        <x-input title="防汛标题" required v-model="floodPreventionTitle" name="title" placeholder="请输入标题" ></x-input>
      </group>
      <group >
        <x-textarea required name="floodPreventionLink" v-model="floodPreventionLink" placeholder="请输入防汛内容地址"></x-textarea>
      </group>
      <div class="btn-container">
        <x-button class="btn-submit" type="primary" action-type="button" @click.native="submit">提交</x-button>
      </div>
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
      floodPreventionTitle: "",
      floodPreventionLink: ""
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    submit() {
      const {floodPreventionTitle,floodPreventionLink} = this
      if (!this.floodPreventionTitle) {
        this.showWarn("标题不能为空");
        return false;
      }
      if (!this.floodPreventionLink) {
        this.showWarn("链接不能为空");
        return false;
      }
      axios
        .post("/floodprevention/brochure/save", {
          floodPreventionTitle,
          floodPreventionLink,
        })
        .then(res => {
          this.showSuccess("添加成功");
        })
        .catch(() => this.showWarn("添加失败"));
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
.flood-list-container {
  & .weui-cells__title {
    color: black;
    padding-top: 6px;
    padding-bottom: 6px;
    background: #fafafa;
    margin-bottom: 0;
  }
  & .weui-cells__title::before {
    content: "|";
    padding: 0 4px;
    margin-right: 4px;
    color: dodgerblue;
    font-weight: 600;
  }
  & .vux-x-input {
    border-bottom: 1px solid #ecebee;
  }

  & .upload-container {
    padding: 20px;
    & .upload {
      display: inline-block;
      height: 80px;
      width: 80px;
      border: 1px lightgray dashed;
      text-align: center;
      line-height: 80px;
      color: lightgray;
      font-weight: 400;
      & a{
        font-size: 40px;
      }
    }
  }

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
