<template>

<div>
    评论!
</div>
    
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import Welcome from "./Welcome"
import Bbs from "./Bbs"
export default {
  name: "landing-page",
  components: { SystemInformation ,
    Welcome,
    Bbs
  },
  data () {
            return {
                split1: 0.5,
                theme3: 'light',
                tabIndex: 0
            }
        },
  mounted() {
    console.log("bbs mounted")
    
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
