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

    // 获取管理员信息并显示在主页中
    getInfo: callback =>
        $.get(
            baseUrl.getInfoUrl,
            res => callback(res)
        )
}