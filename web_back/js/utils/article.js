var article = {
    show: function(curPage, type, status, id, callback) {
        $.get(
            baseUrl.articleShow, {
                id: id,
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
    },
    add: function(fd, callback) {
        $.ajax({
            url: baseUrl.articleAdd,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res);

            }
        })
    },
    edit: function(fd, callback) {
        $.ajax({
            url: baseUrl.articleEdit,
            type: "post",
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res);
            }
        })

    }
}