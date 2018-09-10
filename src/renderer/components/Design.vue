<template>
<div  id="wrapper">
<div class="etabs-tabgroup">
                        <div class="etabs-tabs"></div>
                        <div class="etabs-buttons"></div>
                  </div>
                  <div class="etabs-views"></div>
</div>
</template>

<script>
export default {
  name: "design",
  components: {   
  },
  data () {
            return {
                split1: 0.5,
                theme3: 'light',
                tabIndex: 0
            }
        },
  mounted() {
    console.log("Desin mounted")
    const TabGroup = require("electron-tabs");
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
