<template>
  <div class="top">
    <h3 class="top-title">
      联网通系统
    </h3>
    <div class="top-right">
      <div class="pos-right">
        <span class="dotClass">
          <el-badge is-dot class="item">
            <i class="el-icon-bell" style="font-size: 18px;cursor: pointer;"></i>
            <!-- <el-button class="share-button" icon="" type="primary"></el-button> -->
          </el-badge >
        </span>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>退出</span>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {},
  computed: {
    ...mapGetters(['menu'])
  },
  methods: {},
  beforeDestroy() {}
}
</script>

<style scoped>
.logout {
  cursor: pointer;
}
.normalem {
  font-style: normal;
}
</style>
