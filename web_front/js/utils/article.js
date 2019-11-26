const article = {
    show: callback =>
        $.get(
            baseUrl.articleShow, {
                perpage: 5,
                state: '已发布',
            },
            res => callback(res)
        ),
    getDetails: (id, callback) =>
        $.get(
            baseUrl.articleShow, {
                'id': id,
            },
            res => callback(res)
        )
}