/* 自适应居中内容盒子 */
getCurrentScreen =  function () {
    // window.innerWidth // 加上滚动条的宽度
    // document.documentElement.clientWidth || document.body.clientWidth; // 页面不含滚动条的宽度
    var screenWidth = document.documentElement.clientWidth || document.body.clientWidth// 修改浏览器分辨率 动态获取分辨率宽度
    // const main = document.getElementById("main");
    console.log(main.style.width.replace("px", "")) // 获取盒子的宽度去除px,隐式转换
    main.style.marginLeft = (screenWidth - main.style.width.replace("px", "")) / 2 + "px"; // 动态居中
    // console.log(screenWidth)
}
/* 设置全局背景色 */
setBackgroundColor = function () {
    // 全局盒子div
    const all = document.getElementById("all");
    // 获取当前浏览器高度
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    // 设置全局的背景色
    all.style.backgroundColor = "#fafafa"
    // 动态全局的高度
    all.style.height = height + "px"
    // console.log(all.style.height)

}
/* 改变页面尺寸时调用函数 */
window.onresize = function () {
    this.getCurrentScreen()
    this.setBackgroundColor()
}
/* 入口函数 */
window.onload = function () {
    this.getCurrentScreen()
    this.setBackgroundColor()

}
