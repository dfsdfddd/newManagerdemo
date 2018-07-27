<template>
  <div class="center" ref="centerid">
    <el-button type="primary" @click="addTab">anniu</el-button>
    <div class="tagView">
      <el-tabs v-model="editableTabsValue2" type="border-card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in editableTabs2" :key="index" :label="item.title" :name="item.name">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <transition name="move" mode="out-in">
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </transition>
      <!-- <transition name="move" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'centerbar',
  data() {
    return {
      editableTabsValue2: '2',
      editableTabs2: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 2
    }
  },
  methods: {
    addTab(targetName) {
      const newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab(targetName) {
      const tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style scoped>
</style>
