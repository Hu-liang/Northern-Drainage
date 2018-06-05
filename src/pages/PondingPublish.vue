
<template>
  <div style="height:100%">
    <div class="flood-list-container">
      <group title="积滞水信息" >
        <x-input title="积水地点" required v-model="pondingPlace" name="pondingPlace" placeholder="请输入积水地点" ></x-input>
        <x-input title="积水深度" required v-model="pondingDepth" name="pondingDepth" placeholder="请输入积水深度(m)" ></x-input>
        <x-input title="积水面积" required v-model="pondingArea" name="pondingAreaitle" placeholder="请输入积水面积(㎡)" ></x-input>
      </group>
      <!-- <group title="">
        <x-input title="备勤令期号" required v-model="date" name="date" placeholder="请输入通知标题" ></x-input>
      </group> -->
      <group title="图片">
        <!-- <x-textarea required name="content" v-model="content" placeholder="请输入通知内容"></x-textarea> -->
        <div class="upload-container">
          <span class="upload" @click="upload">
            <a v-if="!url">+</a>
            <img v-if="url" :src="url" width="100%" height="100%"/>
          </span>
          <input type="file" hidden id="uploadFile" name="uploadFile" @change="getFile">
        </div>
      </group>
      <div class="btn-container">
        <x-button class="btn-submit" type="primary" action-type="button" @click.native="submit">提交</x-button>
        <x-button type="default" action-type="button" @click.native="go('PondingList')">查看上报历史</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, Grid, GridItem, XInput, XButton } from "vux";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import moment from "moment";
import { POINT_CONVERSION_COMPRESSED } from "constants";

export default {
  components: {
    Group,
    Cell,
    Grid,
    GridItem,
    XInput,
    XButton
  },
  data() {
    return {
      pondingPlace: "",
      pondingArea: "",
      pondingDepth: "",
      file: "",
      url: ""
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    upload() {
      document.getElementById("uploadFile").click();
    },
    getFile(e) {
      // if(this.sourceTable && this.sourceId){
      //   this.showWarn('请先上传文件')
      // }
      this.file = e.target.files[0];
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("sourceTable", this.sourceTable);
      formData.append("sourceId", this.sourceId);
      axios
        .post(
          "/attachments/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(res => {
          this.showSuccess("添加成功");
        })
        .catch(() => this.showWarn("添加失败"));

      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = result => (this.url = result.target.result);
    },
    submit() {
      if (!this.pondingPlace) {
        this.showWarn("积水不能为空");
        return false;
      }
      if (!this.pondingDepth) {
        this.showWarn("积水深度不能为空");
        return false;
      }
      if (!this.pondingArea) {
        this.showWarn("积水面积不能为空");
        return false;
      }
      axios
        .post("/ponding/save", {
          pondingPlace: this.pondingPlace,
          pondingDepth: this.pondingDepth,
          pondingArea: this.pondingArea
        })
        .then(res => {
          this.sourceTable = res.data.sourceTable;
          this.sourceId = res.data.pondingId;
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
    },
    go(url) {
      this.$router.push({ name: url });
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
      & a {
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
