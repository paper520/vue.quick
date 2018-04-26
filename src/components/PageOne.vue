<template>
    <article>
        <section>
            <header>
                用例一
            </header>
                    姓名：<input type="text" name="name" v-model="name"><br />
                    国籍：<input type="text" name="country" v-model="country"><br />
                    提示信息：{{infoMessage}}
        </section>
    </article>
</template>

<script>
export default {
  data() {
    return {
      name: "心叶",
      country: "中国"
    };
  },
  computed: {
    infoMessage: function() {
      return (
        "【" + new Date() + "】" + this.name + ",来自" + this.country + "!"
      );
    }
  }
};
</script>

<style scoped>
article {
  font-size: 16px;
  padding: 10px;
}
header{
    color:red;
    font-size: 20px;
}
</style>


