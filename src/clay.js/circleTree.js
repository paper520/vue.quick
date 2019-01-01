import clay from "./index.js";
/**
 * circleTree
 * -------------------------------
 * 名称：圆形树
 * 类型：svg
 * 作者：心叶(yelloxing@gmail.com)
 *
 * 开发日志
 * ===============================
 * 1.2018年12月29日：建立
 */

clay.component("circleTree", function () {
    return {
        "link": function (element, $scope) {

            clay("<g circle-tree>" +
                "<g class='line'></g>" +
                "<g class='circle'></g>" +
                "<g class='text'></g>" +
                "</g>").appendTo(element);

            /**
             * 1.常用工具创建和公共配置
             * ----------------
             */

            //  文字和连线
            var text = clay.svg.text().setAlign('left').setSize(1).setColor('gray');
            var bezier = clay.svg.bezier().setType($scope.cx - 20, $scope.cy - 20, 'circle');

            clay.treeLayout()

                // 获取根结点的方法
                .root($scope.root)

                // 获取子结点的方法
                .child($scope.child)

                // 获取结点ID方法
                .id($scope.id)

                /**
                 * 2.配置绘制方法
                 * ----------------
                 */
                .drawer(function (nodes, rid, size) {

                    var i, p, deep = 0;

                    for (i in nodes) if (nodes[i].left > deep) deep = nodes[i].left;
                    var dis = $scope.r / (deep - 0.5);

                    // 对圆形树调整结点位置
                    for (i in nodes) {
                        p = clay.rotate(
                            $scope.cx, $scope.cy,
                            nodes[i].top / size * Math.PI * 2,
                            $scope.cx + (nodes[i].left - 0.5) * dis, $scope.cy
                        );
                        nodes[i].x = p[0];
                        nodes[i].y = p[1];
                    }

                    // 绘制
                    clay('<circle _id="' + nodes[rid].id + '"></circle>').appendTo('.circle')
                        .attr('cx', nodes[rid].x)
                        .attr('cy', nodes[rid].y)
                        .attr('r', 3)
                        .css({
                            "fill": "#ea779e"
                        });
                    text(nodes[rid].x - -20, nodes[rid].y, $scope.name(nodes[rid].data))
                        .attr('_id', nodes[rid].id)
                        .css({
                            "font-size":"10px"
                        })
                        .appendTo('.text');
                    (function doDrawer(currentNode) {

                        var _i, _node;
                        for (_i in currentNode.children) {
                            _node = nodes[currentNode.children[_i]];

                            // 圆圈初始化
                            clay('<circle _id="' + _node.id + '"></circle>').appendTo('.circle')
                                .attr('cx', currentNode.x)
                                .attr('cy', currentNode.y)
                                .attr('r', 3)
                                .css({
                                    "fill": "#ea779e"
                                });

                            // // 文字初始化
                            text(currentNode.x, currentNode.y, $scope.name(_node.data))
                                .attr('_id', _node.id)
                                .appendTo('.text');

                            // 连线初始化
                            clay('<path></path>').attr('_id', _node.id).appendTo('.line')
                                .css({
                                    "fill": "none",
                                    "stroke": "gray"
                                });

                        }

                        // 启动动画
                        clay.animation(function (deep) {

                            var _currentX, _currentY;
                            for (_i in currentNode.children) {
                                _node = nodes[currentNode.children[_i]];

                                _currentX = (_node.x - currentNode.x) * deep - -currentNode.x;
                                _currentY = (_node.y - currentNode.y) * deep - -currentNode.y;

                                // 圆圈调整
                                clay('.circle').find('[_id="' + _node.id + '"]')
                                    .attr('cx', _currentX)
                                    .attr('cy', _currentY);

                                // 文字调整
                                clay('.text').find('[_id="' + _node.id + '"]')
                                    .attr('x', _currentX + 10)
                                    .attr('y', _currentY)
                                    .css({
                                        "font-size": 10 * deep + "px"
                                    })
                                    .attr('transform', "rotate(" + (_node.top / size * 360) + "," + _currentX + "," + _currentY + ")");

                                // 连线调整
                                clay('.line').find('[_id="' + _node.id + '"]')
                                    .attr('d', bezier.setL(40 * deep)(+currentNode.x, +currentNode.y, +_currentX, +_currentY));

                            }

                        }, 700, function () {

                            // 递归调用
                            for (_i in currentNode.children) {
                                _node = nodes[currentNode.children[_i]];
                                doDrawer(_node);
                            }

                        });

                    })(nodes[rid]);

                })

                // 启动
                ($scope.data);

        }
    };
});
