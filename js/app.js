/**
 * mui初始化
 */
mui.init();

/**
 * 打开右滑菜单,a链接无法跳转的解决方案
 */
mui('body').on('tap', 'a', function () {
    var href = this.getAttribute('href');
    mui.openWindow({
        id: 'new',
        url: href
    })
})
