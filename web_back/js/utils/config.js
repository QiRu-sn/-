// 初始化接口默认地址
var APIURLS = 'http://localhost:8000';
var baseUrl = {
    loginUrl: APIURLS + '/admin/login',
    logOutUrl: APIURLS + '/admin/logout',
    getInfoUrl: APIURLS + '/admin/getuser',

    categoryShow: APIURLS + '/admin/category_search',
    categoryDel: APIURLS + '/admin/category_delete',
    categoryAdd: APIURLS + '/admin/category_add',
    categoryEdit: APIURLS + '/admin/category_edit',

    articleShow: APIURLS + '/admin/search',
    articleDel: APIURLS + '/admin/article_delete',
    articleAdd: APIURLS + '/admin/article_publish',
}