var artical = {
    show: function(callback) {
        $.get(
            baseUrl.articalShow,
            function(res) {
                callback(res);
            }
        )
    },
    del: function(id, callback) {
        $.get(
            baseUrl.articalDel, {
                "id": id
            },
            function(res) {
                callback(res);
            }
        )
    }
}