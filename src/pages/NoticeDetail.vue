
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
  
    <group class="group-status">
      <div class="total">各单位响应状态合计</div>
      <div class="item">
         <div>大型抢险单元（组）</div>  
         <div class="number">{{group.largeEmergencyUnits}}</div>    
      </div>
      <div class="item">
         <div>大型抢险单元（人）     </div>
          <div class="number">{{group.largeEmergencyHumans}}</div>   
      </div>
      <div class="item">
        <div>中型抢险单元（组）     </div> 
        <div class="number">{{group.midEmergencyUnits}}</div>  
      </div>
      <div class="item">
        <div>中型抢险单元（人）     </div> 
        <div class="number">{{group.midEmergencyHumans}}</div>  
      </div>
      <div class="item">
        <div>小型抢险单元（组）     </div> 
        <div class="number">{{group.smallEmergencyUnits}}</div>  
      </div>
      <div class="item">
        <div>小型抢险单元（人）     </div> 
        <div class="number">{{group.smallEmergencyHumans}}</div>  
      </div>
      <div class="item">
        <div>车巡处置（组）       </div>
        <div class="number">{{group.vehiclePatrolsUnits}}</div>        
      </div>
      <div class="item">
        <div>车巡处置（人）       </div>
        <div class="number">{{group.vehiclePatrolsHumans}}</div>    
      </div>
      <div class="item">
        <div>人巡、桥区、道路打捞组（组）</div>
        <div class="number">{{group.salvageUnits}}</div> 
      </div>
      <div class="item">
        <div>人巡、桥区、道路打捞组（人）</div>
        <div class="number">{{group.salvageHumans}}</div> 
      </div>
      <div class="item">
        <div>设备抢修组（组）      </div> 
        <div class="number">{{group.repairemergencyUnits}}</div>     
      </div>
      <div class="item">
        <div>设备抢修组（人）      </div> 
        <div class="number">{{group.repairemergencyHumans}}</div>     
      </div>
      <div class="item">
        <div>泵站人员（人）      </div> 
        <div class="number">{{group.pumpHumans}}</div>     
      </div>
      <div class="item">
        <div>指挥部（人））      </div> 
        <div class="number">{{group.commandPost}}</div>     
      </div>
      <div class="item">
        <div>出动总人数（含指挥部人员）      </div> 
        <div class="number">{{group.allHumans}}</div>     
      </div>
    </group>

    <group class="group-status" v-show="visible">
      <div class="total">三分公司</div>
      <div class="item inout">
         <div>大型抢险单元（组）</div>  
         <x-input  :show-clear="false" type="number" class="number" v-model="largeEmergencyUnits" placeholder="请输入数字"></x-input>    
      </div>
      <div class="item">
         <div>大型抢险单元（人）     </div>
         <x-input  :show-clear="false" type="number" class="number" v-model="largeEmergencyHumans" placeholder="请输入数字"></x-input>    
          <!-- <div class="number">{{group.largeEmergencyHumans}}</div>    -->
      </div>
      <div class="item">
        <div>中型抢险单元（组）     </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="midEmergencyUnits" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.midEmergencyUnits}}</div>   -->
      </div>
      <div class="item">
        <div>中型抢险单元（人）     </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="midEmergencyHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.largeEmergencyHumans}}</div>   -->
      </div>
      <div class="item">
        <div>小型抢险单元（组）     </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="smallEmergencyUnits" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.smallEmergencyUnits}}</div>   -->
      </div>
      <div class="item">
        <div>小型抢险单元（人）     </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="smallEmergencyHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.smallEmergencyHumans}}</div>   -->
      </div>
      <div class="item">
        <div>车巡处置（组）       </div>
        <x-input  :show-clear="false" type="number" class="number" v-model="vehiclePatrolsUnits" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.vehiclePatrolsUnits}}</div>         -->
      </div>
      <div class="item">
        <div>车巡处置（人）       </div>
        <x-input  :show-clear="false" type="number" class="number" v-model="vehiclePatrolsHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.vehiclePatrolsHumans}}</div>     -->
      </div>
      <div class="item">
        <div>人巡、桥区、道路打捞组（组）</div>
        <x-input  :show-clear="false" type="number" class="number" v-model="salvageUnits" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.salvageUnits}}</div>  -->
      </div>
      <div class="item">
        <div>人巡、桥区、道路打捞组（人）</div>
        <x-input  :show-clear="false" type="number" class="number" v-model="salvageHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.salvageHumans}}</div>  -->
      </div>
      <div class="item">
        <div>设备抢修组（组）      </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="repairemergencyUnits" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.repairemergencyUnits}}</div>      -->
      </div>
      <div class="item">
        <div>设备抢修组（人）      </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="repairemergencyHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.repairemergencyHumans}}</div>      -->
      </div>
      <div class="item">
        <div>泵站人员（人）      </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="pumpHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.pumpHumans}}</div>      -->
      </div>
      <div class="item">
        <div>指挥部（人））      </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="commandPost" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.commandPost}}</div>      -->
      </div>
      <div class="item">
        <div>出动总人数（含指挥部人员）      </div> 
        <x-input  :show-clear="false" type="number" class="number" v-model="allHumans" placeholder="请输入数字"></x-input>    
        <!-- <div class="number">{{group.allHumans}}</div>      -->
      </div>
    </group>

    <div class="btn-container" v-show="visible">
      <x-button class="btn-submit" type="primary" action-type="button" @click.native="addUnit">提交</x-button>
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
      group: null,
      childgroup:null,
      subGourp: null,
      visible: false,
      largeEmergencyUnits: null,
      largeEmergencyHumans: null,
      midEmergencyUnits: null,
      midEmergencyHumans: null,
      smallEmergencyUnits: null,
      smallEmergencyHumans: null,
      vehiclePatrolsUnits: null,
      vehiclePatrolsHumans: null,
      salvageUnits: null,
      salvageHumans: null,
      repairemergencyUnits: null,
      repairemergencyHumans: null,
      pumpHumans: null,
      commandPost: null,
      allHumans: null
    };
  },
  created() {
    this.fetch(this.$route.params.id);
    this.fetchGroup(this.$route.params.id);
    // this.fetchUnit(this.$route.params.id);
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    fetch(id) {
      axios.get(`preparation/order/getById?id=${id}`).then(res => {
        // debugger;
        this.item = res.data;
      });
    },
    fetchGroup(id) {
      // https://39.106.149.126:8443/status/feedback/getAllByPreparationOrderId?preparationOrderId=26
      // axios.get(`status/feedback/getAllByPreparationOrderId?preparationOrderId=${id}`).then(res => {
      axios
        .get(
          `status/feedback/getSumByPreparationOrderId?preparationOrderId=${id}`
        )
        .then(res => {
          // debugger;
          this.group = res.data;
          if (res.data.createdSubUnit == null) {
            this.visible = true;
          } else {
            this.fetchUnit(this.$route.params.id);
          }
        });
    },
    addUnit(id) {
      const {
        largeEmergencyUnits,
        largeEmergencyHumans,
        midEmergencyUnits,
        midEmergencyHumans,
        smallEmergencyUnits,
        smallEmergencyHumans,
        vehiclePatrolsUnits,
        vehiclePatrolsHumans,
        salvageUnits,
        salvageHumans,
        repairemergencyUnits,
        repairemergencyHumans,
        pumpHumans,
        commandPost,
        allHumans
      } = this;
      const params = {
        preparationOrderId: { preparationOrderId: this.$route.params.id },
        createdSubUnit:-1,
        largeEmergencyUnits,
        largeEmergencyHumans,
        midEmergencyUnits,
        midEmergencyHumans,
        smallEmergencyUnits,
        smallEmergencyHumans,
        vehiclePatrolsUnits,
        vehiclePatrolsHumans,
        salvageUnits,
        salvageHumans,
        repairemergencyUnits,
        repairemergencyHumans,
        pumpHumans,
        commandPost,
        allHumans
      };
      axios.post("status/feedback/save", params).then(res => {
        if(res.status == 200 ){
          this.visible = false
          this.group = params
          this.$vux.toast.show({
            text: `添加成功`,
            type: "success"
          });
        }

      });
    },
    fetchUnit(id) {
      //getAllByPreparationOrderIdAndCreatedSubUnit
      axios
        .get(
          `status/feedback/getAllByPreparationOrderIdAndcreatedSubUnit?preparationOrderId=${id}`
        )
        .then(res => {
          // debugger;
          this.subGourp = res.data;
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
