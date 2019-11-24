var comment = {
    publish: function(name, content, article_id, callback) {
        $.post(
            baseUrl.commentPublish, {
                name: name,
                content: content,
                article_id: article_id,
            },
            function(res) {
                callback(res);
            }
        )
    },
    show: function(article_id, callback) {
        $.get(
            baseUrl.commentShow, {
                article_id: article_id,
            },
            function(res) {
                callback(res);
            }
        )
    }
}