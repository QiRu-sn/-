var article = {
    show: function(callback) {
        $.get(
            baseUrl.articleShow, {
                perpage: 5,
                state: '已发布',
            },
            function(res) {
                callback(res);
            }
        )
    },
    getDetails: function(id, callback) {
        $.get(
            baseUrl.articleShow, {
                'id': id,
            },
            function(res) {
                callback(res);
            }
        )
    }
}