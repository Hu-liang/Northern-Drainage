
<template>
  <div style="height:100%" class="notice-detail-container">
    <div class="title">
      <div>北京城市排水集团有限责任公司</div>
      <!-- <div>防汛备勤通知</div> -->
      <div>{{item.preparationTitle}}</div>
    </div>
    <div class="date">{{item.preparationVersion}}</div>
    <section class="content">
      <div>各单位:</div>
      <div class="main">
        {{item.preparationContent}}
      </div>
      <div class="tail">排水集团防汛指挥部</div>
    </section>

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
  XButton
} from "vux";
import { mapState, mapActions } from "vuex";
import NoticeItem from "../components/NoticeItem";
import axios from "axios";
import {showSuccess , showWarn} from '../plugins/toast'

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
    NoticeItem,
    XInput,
    XButton
  },
  data() {
    return {
      item: null,
    };
  },
  created() {
    this.fetch(this.$route.params.id);
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    fetch(id) {
      axios.get(`preparation/notice/getById?id=${id}`).then(res => {
        this.item = res.data;
      });
    }
  }
};
</script>

<style lang="less">
.notice-detail-container {
  text-align: center;
  .title {
    margin-top: 22px;
    font-size: 16px;
  }
  & .date {
    font-size: 14px;
    color: rgba(0, 0, 0, 7);
  }
  & .content {
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    padding: 10px;
  }
  & .main {
    text-indent: 22px;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
    line-height: 22px;
  }
  & .tail {
    margin-top: 10px;
    text-align: right;
  }
  & .group-status {
    text-align: left;
    text-indent: 22px;
    & .total {
      text-indent: 12px;
      font-size: 14px;
      padding: 8px 0;
      &::before {
        content: "|";
        padding: 0 4px;
        color: crimson;
        font-weight: 600;
      }
    }
    & .item {
      // text-indent: 30px;
      height: 34px;
      // line-height: 34px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & :first-child{
        white-space: nowrap;
      }
      & .number {
        margin-right: 14px;
        // text-align: left;
        // float: right;
      }
      .vux-x-input{
        flex: 0 0 25%;
        text-align: right;
      }
    }
    & .item:nth-child(2n) {
      background: #f7f7f7;
    }
  }
  & .btn-container {
    padding: 20px;
    margin-top: 20px;
    & .weui-btn {
      background: #3b80cd;
    }
  }
}
</style>
