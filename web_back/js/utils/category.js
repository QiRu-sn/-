var category = {
    // 文章类别页面加载读取数据
    show: function(callback) {
        $.get(
            baseUrl.categoryShow,
            function(res) {
                callback(res);
            }
        )
    }
}