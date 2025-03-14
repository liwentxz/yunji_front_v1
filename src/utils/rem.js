// (function (window) {
//   function setRem() {
//     const designWidth = 1920; // 设计稿基准宽度（根据实际设计稿修改）
//     const baseSize = 14; // 1rem = 14px
//     const screenWidth = window.document.documentElement.clientWidth;

//     // 动态计算根字体大小
//     const fontSize = (screenWidth / designWidth) * baseSize;
//     window.document.documentElement.style.fontSize = fontSize + "px";
//   }

//   setRem(); // 初始化
//   window.addEventListener("resize", setRem); // 窗口变化时重新计算
// })(window);
