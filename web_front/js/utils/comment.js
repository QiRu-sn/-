const comment = {
    publish: (name, content, article_id, callback) =>
        $.post(
            baseUrl.commentPublish, {
                name: name,
                content: content,
                article_id: article_id,
            },
            res => callback(res)
        ),
    show: (article_id, callback) =>
        $.get(
            baseUrl.commentShow, {
                article_id: article_id,
            },
            res => callback(res)
        ),
    search: callback =>
        $.get(
            baseUrl.commentShow,
            res => callback(res)
        )
}