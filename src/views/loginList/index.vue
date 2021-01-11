<template>
  <page-header-wrapper>
    <a-card>
      <a-select default-value="gun" style="width: 300px; margin-bottom: 24px" @change="handleChange">
        <a-select-option v-for="item in sysData" :key="item.id" :value="item.id">{{ item.describe }}</a-select-option>
      </a-select>
      <a-button @click="hanldeAdd" type="primary" style="float: right">添加</a-button>

      <a-table :columns="columns" :data-source="dataSource">
        <template slot="atcion" slot-scope="text, record">
          <a-button type="link" @click="toLogin(record)">
            登录
          </a-button>
        </template>
      </a-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StandardList',
  components: {},
  computed: {
    ...mapState({
      sysData: state => state.user.sysData,
      dataList: state => state.user.dataList
    }),
    dataSource () {
      return this.dataList[this.type] || []
    }
  },
  data () {
    return {
      type: 'gun',
      columns: [
        {
          title: 'userName',
          dataIndex: 'userName',
          key: 'userName'
        },
        {
          title: 'passWord',
          dataIndex: 'passWord',
          key: 'passWord'
        },
        {
          title: 'describe',
          dataIndex: 'describe',
          key: 'describe'
        },
        {
          title: 'atcion',
          dataIndex: 'atcion',
          key: 'atcion',
          scopedSlots: { customRender: 'atcion' }
        }
      ]
    }
  },
  methods: {
    toLogin ({ userName, passWord }) {
      const sysD = this.sysData.find(item => item.id === this.type)
      window.open(`${sysD.href}?userName=${userName}&passWord=${passWord}&CLEAR_ACCESS_TOKEN=yes`, '_blank')
    },
    handleChange (value) {
      this.type = value
    },
    hanldeAdd () {
      this.$router.push('/dashboard/add')
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
