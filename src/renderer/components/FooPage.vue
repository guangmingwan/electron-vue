<template>
<div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Menu @on-select="turnUrl" :theme="theme3" active-name="1">
                  <MenuGroup title="内容管理">
                      <MenuItem name="1">
                          <Icon type="md-document" />
                          文章管理F
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
                          设计器
                      </MenuItem>
                  </MenuGroup>
              </Menu>
            </div>
            <div slot="right" class="demo-split-pane">
                <welcome v-if="tabIndex == '1'"></welcome>
                <Bbs v-if="tabIndex == '2'"></Bbs>
                <div v-if="tabIndex == '3'"></div>
                <Design v-show="tabIndex == '4'" ></Design>
             
            </div>
        </Split>
    </div>


  
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import Welcome from "./Welcome"
import Bbs from "./Bbs"
import Design from "./Design"
export default {
  name: "landing-page",
  components: { SystemInformation ,
    Welcome,
    Bbs,
    Design
  },
  data () {
            return {
                split1: 0.5,
                theme3: 'light',
                tabIndex: 0
            }
        },
  mounted() {
    

    console.log("FooPage mounted");
    
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    turnUrl(name) {
          console.log(name)
          this.tabIndex = name;
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
