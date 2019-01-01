<template>
    <svg></svg>
</template>

<script>
import clay from "../clay.js";
import program from "../../data/program.json";
import "../clay.js/circleTree.js";

export default {
  mounted: function() {
    clay("svg")
      .appendTo("body")
      .attr("width", 800)
      .attr("height", 700)

      // 使用组件
      .use("circleTree", {
        // 数据
        data: program.data,

        // 结点名称
        name: orgItem => orgItem.name,

        // 树的圆心和半径
        cx: 350,
        cy: 350,
        r: 300,

        // 树结构配置
        root: initTree => initTree,
        child: parentTree => parentTree.children,
        id: treedata =>
          treedata.name + (treedata.value ? "_" + treedata.value : "")
      });
  }
};
</script>
