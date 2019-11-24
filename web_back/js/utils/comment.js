var comment = {
    show: function(page, perpage, callback) {
        $.get(baseUrl.commentShow, {
            page: page,
            perpage: perpage,
        }, function(res) {
            callback(res)
        })


    }
}