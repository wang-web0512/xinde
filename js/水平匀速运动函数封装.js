// 非行间样式函数
function getStyle(ele, attr) {
    // if (window.getComputedStyle) {
    //     return getComputedStyle(ele)[attr];
    // } else {
    //     return ele.currentStyle[attr];
    // }

    return window.getComputedStyle ? getComputedStyle(ele)[attr] : ele.currentStyle[attr];
}

// 封装运动函数 参数: 元素 样式名 步长 终点
// 声明定时器
var timer;
function move(ele, attr, step, target) {

    // 判断步长正负
    step = parseInt(getStyle(ele, attr)) < target ? step : -step;

    // 设表先关
    clearInterval(timer);

    timer = setInterval(function () {
        // 获取当前位置
        var currentAttr = parseInt(getStyle(ele, attr));

        // 加上步长
        currentAttr += step;

        // 验收
        if (currentAttr >= target && step >= 0 || currentAttr <= target && step < 0) {
            // 拉终停表
            currentAttr = target;
            clearInterval(timer);
        }

        // 赋值
        ele.style[attr] = currentAttr + 'px';
    }, 50);
}
