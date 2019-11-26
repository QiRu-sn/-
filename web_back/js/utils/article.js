const article = {
    show: (curPage, type, status, callback) => $.get(baseUrl.articleShow, { page: curPage, type: type, state: status }, res => callback(res)),
    del: (id, callback) => $.get(baseUrl.articleDel, { "id": id }, res => callback(res)),
    add: (fd, callback) => $.ajax({ url: baseUrl.articleAdd, type: 'post', data: fd, processData: false, contentType: false, success: res => callback(res) }),
    edit: (fd, callback) => $.ajax({ url: baseUrl.articleEdit, type: "post", data: fd, processData: false, contentType: false, success: res => callback(res) }),
    getDetails: (id, callback) => $.get(baseUrl.articleShow, { 'id': id, }, res => callback(res)),
}