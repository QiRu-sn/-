const category = {
    // 文章类别页面加载读取数据
    show: callback =>
        $.get(
            baseUrl.categoryShow,
            res =>
            callback(res)
        ),
    del: (id, callback) =>
        $.post(
            baseUrl.categoryDel, { 'id': id },
            res =>
            callback(res)
        ),
    add: (name, slug, callback) =>
        $.post(
            baseUrl.categoryAdd, {
                'name': name,
                'slug': slug,
            },
            res =>
            callback(res)
        ),
    edit: (id, name, slug, callback) =>
        $.post(
            baseUrl.categoryEdit, {
                "id": id,
                'name': name,
                "slug": slug,
            },
            res =>
            callback(res)
        )


}