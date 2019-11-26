// 初始化接口默认地址
const APIURLS = 'http://localhost:8000';
const baseUrl = {
    loginUrl: APIURLS + '/admin/login',
    logOutUrl: APIURLS + '/admin/logout',
    getInfoUrl: APIURLS + '/admin/getuser',
    getUserInfo: APIURLS + '/admin/userinfo_get',
    userEdit: APIURLS + '/admin/userinfo_edit',

    categoryShow: APIURLS + '/admin/category_search',
    categoryDel: APIURLS + '/admin/category_delete',
    categoryAdd: APIURLS + '/admin/category_add',
    categoryEdit: APIURLS + '/admin/category_edit',

    articleShow: APIURLS + '/admin/search',
    articleDel: APIURLS + '/admin/article_delete',
    articleAdd: APIURLS + '/admin/article_publish',
    articleEdit: APIURLS + '/admin/article_edit',

    commentShow: APIURLS + '/admin/comment_search',

    articleCount: APIURLS + '/admin/article_count',
    commentCount: APIURLS + '/admin/comment_count',
    monthCount: APIURLS + '/admin/month_article_count',
    categoryCount: APIURLS + '/admin/article_category_count',
    visitCount: APIURLS + '/admin/article_category_visit',
}