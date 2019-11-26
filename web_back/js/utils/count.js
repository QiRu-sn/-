const count = {
    article_count: callback =>
        $.get(baseUrl.articleCount, res => callback(res)),
    comment_count: callback =>
        $.get(baseUrl.commentCount, res => callback(res)),
    month_count: callback =>
        $.get(baseUrl.monthCount, res => callback(res)),
    category_count: callback =>
        $.get(baseUrl.categoryCount, res => callback(res)),
    visit_count: callback =>
        $.get(baseUrl.visitCount, res => callback(res))
}