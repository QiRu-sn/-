var category = {
    // 文章类别页面加载读取数据
    show: function(callback) {
        $.get(
            baseUrl.categoryShow,
            function(res) {
                callback(res);
            }
        )
    },
    edit: function(id, name, slug, callback) {
        $.post(
            baseUrl.categoryEdit, {
                "id": id,
                'name': name,
                "slug": slug,
            },
            function(res) {
                callback(res);

            }
        )
    }

}