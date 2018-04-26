<template>
    <section>
      <header>
        {{msg}}
      </header>
      <ul>
      <!--路由导航【地方一】-->
        <li>
          <router-link to="/PageOneLink">页面一</router-link>
        </li>
        <li>
          <router-link to="/PageTwoLink">页面二</router-link>
        </li>
    </ul>
    <!--路由跳转视图【地方二】-->
    <router-view></router-view>
    </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue.quick - 基本版本代码"
    };
  }
};
</script>

<style>
html {
  font-size: 100px;
}
body {
  margin: 0;
}
header {
  font-size: 0;
}
ul {
  background-color: black;
  font-size: 0;
  line-height: 0.4rem;
  padding: 0 0.3rem 0 0.3rem;
}
ul > li:not(:last-child) {
  margin-right: 0.1rem;
}
ul > li {
  font-size: 0.16rem;
  display: inline-block;
}
ul > li > a:hover {
  color: rgb(240, 227, 227);
}
ul > li > a.router-link-active {
  color: #fff;
  outline: none;
}
ul > li > a {
  color: #60818e;
  text-decoration: none;
}
</style>

