var article = {
    show: function(curPage, type, status, callback) {
        $.get(
            baseUrl.articleShow, {
                page: curPage,
                type: type,
                state: status,
            },
            function(res) {
                callback(res);
            }
        )
    },
    del: function(id, callback) {
        $.get(
            baseUrl.articleDel, {
                "id": id
            },
            function(res) {
                callback(res);
            }
        )
    }
}