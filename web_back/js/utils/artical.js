var artical = {
    show: function(currage, callback) {
        $.get(
            baseUrl.articalShow, {
                page: currage,
            },
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