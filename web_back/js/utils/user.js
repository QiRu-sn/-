const user = {
    // 登录请求
    login: (myName, myPwd, callback) =>
        $.post(
            baseUrl.loginUrl, {
                user_name: myName,
                password: myPwd,
            },
            res => callback(res)
        ),

    // 退出请求
    logOut: callback =>
        $.post(
            baseUrl.logOutUrl,
            res => callback(res)
        ),

    // 获取管理员登录信息并显示在主页中
    getInfo: callback =>
        $.get(
            baseUrl.getInfoUrl,
            res => callback(res)
        ),

    // 获取用户所有信息
    getUserInfo: callback =>
        $.get(
            baseUrl.getUserInfo,
            res => callback(res)
        ),

    userEdit: (fd, callback) => {
        $.ajax({
            url: baseUrl.userEdit,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res)
            }
        })
    }
}