<template>
  <div class="rain">
    <button-tab>
        <button-tab-item selected>全市降雨</button-tab-item>
        <button-tab-item >区县降雨</button-tab-item>
    </button-tab>
    <section class="table-container">
      <p class="time"> 2018-04-28 08:00:00 至 2018-05-01 08:00:00 </p>
      <div class="avg">
        <p>平均降雨: 0.01mm</p>
        <p>最大降雨: 0.1mm(顺义 顺义)</p>
        <p></p>
      </div>
      <x-table :cell-bordered="false"  style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>区名</th>
            <th>站名</th>
            <th>雨量(mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>昌平</td>
            <td>十三陵水库</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
          <tr>
            <td>海淀</td>
            <td>十三陵水库</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
          <tr>
            <td>故宫</td>
            <td>十三陵水库</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </x-table>
    </section>
  </div>
</template>

<script>
import {
  ButtonTab,
  ButtonTabItem,
  XTable
} from "vux";

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
.rain {
  padding: 4px;
  & .vux-button-tab-item {
    border-radius: 0;
    &:after {
      border-radius: 0;
    }
  }
  & .table-container{
    & .avg{
      margin-left: .2rem;
      font-size: .3rem;
    }
    & .time {
      padding:2;
      background:rgba(128,128,128,.4);
      padding:.1rem;
      text-indent: 10px;
      margin:.1rem 0;
    }
    
    font-size: .2rem;
  }
}

</style>
