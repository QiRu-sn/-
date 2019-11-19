// 初始化接口默认地址
var URL = 'http://localhost:8000';
var user = {
    // 登录请求
    login: function(myName, myPwd) {
        $.post(
            URL + '/admin/login', {
                user_name: myName,
                password: myPwd,
            },
            function(callback) {
                callback(res);
            }
        )
    }
}