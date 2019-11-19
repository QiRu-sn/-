// 初始化接口默认地址
var URL = 'http://localhost:8000';
var user = {
    // 登录请求
    login: function(myName, myPwd, callback) {
        $.post(
            URL + '/admin/login', {
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
            URL + '/admin/logout',
            function(res) {
                callback(res);
            }
        )
    },

    // 获取管理员信息并显示在主页中
    getInfo: function(callback) {
        $.get(
            URL + '/admin/getuser',
            function(res) {
                callback(res);
            }
        )
    }
}