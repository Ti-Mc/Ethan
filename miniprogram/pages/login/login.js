
Page({

  data: {
    phone: '',
    password: '',
    success: false,
    text: ''
  },
  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取输入密码 

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value

    })

  },

  // 登录 
  login: function () {
    var that = this;   
    var warn = "哼，你是二逼"; 
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })

    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })

    }else {
      if(that.data.phone == "ethan" && that.data.password == "ethan"){
        console.log("ssss")
        wx.switchTab({
          url: '/pages/picture/picture',
        })
      }else{
        wx.showModal({
          title: '提示',
          content: warn
        })
      }
    }
  },
  // 清空
  cleanName: function () {
    this.setData({
      phone : "",
      passWord : ""
    })
  }

})
