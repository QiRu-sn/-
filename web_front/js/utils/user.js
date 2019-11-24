var user = {
    // 登录请求
    login: function(myName, myPwd, callback) {
        $.post(
            baseUrl.loginUrl, {
                user_name: myName,
                password: myPwd,
            },
            function(res) {
                callback(res);
            }
        )
    },

    // 退出请求
    logOut: function(callback) {
        $.post(
            baseUrl.logOutUrl,
            function(res) {
                callback(res);
            }
        )
    },

    // 获取管理员信息并显示在主页中
    getInfo: function(callback) {
        $.get(
            baseUrl.getInfoUrl,
            function(res) {
                callback(res);
            }
        )
    }
}