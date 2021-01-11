<template>
  <page-header-wrapper>
    <a-card>
      <a-select v-model="type" style="width: 220px">
        <a-select-option v-for="item in sysData" :key="item.id" :value="item.id">{{ item.describe }}</a-select-option>
      </a-select>

      <a-form-model ref="form" :model="param" :rules="rules">
        <a-row :gutter="10">
          <a-col :span="24" :md="12">
            <a-form-model-item label="账号" prop="userName">
              <a-input v-model.trim="param.userName" :maxLength="50" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" :md="12">
            <a-form-model-item label="密码" prop="passWord">
              <a-input v-model.trim="param.passWord" :maxLength="50" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" :md="12">
            <a-form-model-item label="描述" prop="describe">
              <a-input v-model.trim="param.describe" :maxLength="50" />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>

      <a-button type="pramry" @click="handleAdd">
        保存
      </a-button>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginAdd',
  components: {},

  computed: {
    ...mapState({
      sysData: state => state.user.sysData,
      dataList: state => state.user.dataList
    })
  },
  data () {
    return {
      param: {},
      type: 'gun',
      rules: {
        userName: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleAdd () {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (!this.param.passWord) {
            this.param.passWord = this.param.userName.substring(this.param.userName.length - 6)
          }
          const dataList = { ...this.dataList }
          dataList[this.type].push(this.param)
          this.$store.dispatch('SetUserAndSys', { sysData: this.sysData, dataList: dataList })
          this.param = {}
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-avatar-lg {
  width: 48px;
  height: 48px;
  line-height: 48px;
}

.list-content-item {
  color: rgba(0, 0, 0, 0.45);
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 40px;
  span {
    line-height: 20px;
  }
  p {
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 22px;
  }
}
</style>
