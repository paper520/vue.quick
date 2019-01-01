<template>
  <section>
    <input type="text" v-model="justDoIt">
    <div>
      输入的数据：{{justDoIt}}
    </div>
    <input type="button" value="DoIt" v-on:click="doIt()">
  </section>
</template>
<script>
export default {
  //一些配置
  data() {
    return {
      justDoIt: "初始化数据"
    };
  },
  methods: {
    doIt() {
      alert(this.justDoIt);
    }
  },
  watch: {
    justDoIt: function(newval, oldval) {
      console.log("justDoIt改变了，新值为：" + newval + ",旧值为：" + oldval);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  & > div {
    font-size: 20px;
  }
}
</style>
