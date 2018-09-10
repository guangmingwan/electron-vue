<template>
<div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Menu on-select="turnUrl" :theme="theme3" active-name="1">
                  <MenuGroup title="内容管理">
                      <MenuItem name="1">
                          <Icon type="md-document" />
                          文章管理K
                      </MenuItem>
                      <MenuItem name="2">
                          <Icon type="md-chatbubbles" />
                          评论管理
                      </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="统计分析">
                      <MenuItem name="3">
                          <Icon type="md-heart" />
                          用户留存
                      </MenuItem>
                      <MenuItem name="4">
                          <Icon type="md-leaf" />
                          流失用户
                      </MenuItem>
                  </MenuGroup>
              </Menu>
            </div>
            <div slot="right" class="demo-split-pane">
              <!-- 对应的组件内容渲染到router-view中 -->
              
                <div id="wrapper">
                  <div class="etabs-tabgroup">
                  <div class="etabs-tabs"></div>
                  <div class="etabs-buttons"></div>
              </div>
                <div class="etabs-views"></div>
            </div>
            </div>
        </Split>
    </div>


  
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";

export default {
  name: "landing-page",
  components: { SystemInformation },
  data () {
            return {
                split1: 0.5,
                theme3: 'light'
            }
        },
  mounted() {
    const TabGroup = require("electron-tabs");

    console.log("mounted");
    let tabGroup = new TabGroup({
      newTab: {
        title: "New Tab"
      }
    });

    tabGroup.addTab({
      title: "我的第一本杂志书",
      src: "http://baidu.com"
    });

    tabGroup.addTab({
      title: "旅游日记",
      src: "http://electron.atom.io",
      visible: true,
      active: true
    });
    tabGroup.addTab({
      title: "有福微信书",
      src: "http://www.yofus.com",
      visible: true,
      active: true
    });
  },
  methods: {
      turnUrl(name) {
          console.log(name)
      },
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>
<style>
    .demo-split{
        height: 100%;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
