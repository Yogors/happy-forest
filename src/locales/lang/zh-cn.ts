import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: '智能方案工具',
      loginSuccess: '登录成功',
      welcomeBack: '欢迎回来'
    },
    userCenter: {
      username: '用户名',
      id: '账号ID',
      gender: '性别',
      email: '邮箱',
      headUrl: '头像'
    },
    common: {
      setting: '设置',
      langChange: '语言切换',
      volumeChange: '音量调节',
      phoneNumber: '手机号码',
      captchaCode: '验证码',
      password: '密码',
      confirmPassword: '确认密码',
      back: '返回',
      confirm: '确定',
      cancel: '取消',
      tip: '提示',
      search: '搜索',
      fullscreen: '全屏',
      themeMode: '主题模式',
      notification: '消息通知',
      themeConfig: '主题配置',
      UserCenter: '个人中心',
      logout: '退出登录',
      close: '关闭',
      tab: '切换',
      save: '保存',
      reload: '重新加载',
      delete: '删除',
      tips: {
        quitTips: '您确定要退出登录吗？',
        searchTips: '请输入关键词搜索',
        emptyData: '暂无数据',
        formSelect: '请选择',
        formInput: '请输入',
        addSuccess: '新增成功',
        editSuccess: '编辑成功',
        operationSuccessful: '操作成功',
        clickToUpload: '点击上传',
        registerSuccess: '注册成功'
      }
    },
    welcome: {
      tip: '快乐森林是一片有魔法的大陆，上面生活着一帮天天都很快乐的小动物。它们会使用折纸的魔法搭建房屋，创造物品。这次，快乐森林来了个见识颇多的新访客！Ta的到来将会给动物们平淡的生活带来什么样的新惊喜呢？',
      tips6: '今天又是充满活力的一天！',
      tips7: '生成定制化解决方案',
      tips8: '根据你的文档以及需求生成定制化解决方案'
    },
    login: {
      'pwd-login': '账密登录',
      'mobile-login': '手机密码登录',
      'code-login': '手机验证码登录',
      register: '注册',
      'reset-pwd': '重置密码',
      'bind-wechat': '微信绑定',
      'pwd-login-tips': {
        accountTips: '请输入用户名',
        mobileTips: '请输入手机号',
        passwordTips: '请输入密码',
        captchaTips: '请输入验证码',
        rememberMeTips: '记住我',
        resetPwdTips: '忘记密码？'
      },
      registerTips: {
        getVerificationCode: '获取验证码',
        Seconds: '秒后重新获取',
        emptyPhone: '手机号码不能为空',
        errorPhone: '手机号码格式错误',
        successPhone: '验证码发送成功',
        emailTips: '请输入邮箱',
        formatError: '格式错误',
        passwordError: '密码为6-18位数字/字符/符号，至少2种组合',
        confirmPwdTips: '请输入确认密码',
        notMatchPwdTips: '输入的值与密码不一致',
        agreementTips: '请仔细阅读并接受《用户协议》《隐私权政策》'
      },
      agreementTips: {
        tips: '我已经仔细阅读并接受',
        userAgreement: '《用户协议》',
        privacyPolicy: '《隐私权政策》'
      }
    },
    routes: {
      home: '主界面',
      generationTool: '方案生成工具',
      workbench: '工作台',
      pptLIst: '我的PPT',
      userInfo: '个人资料',
      notFound: 'Not Found',
      route500: '服务器错误',
      route403: '无权限',
      routeConstant: '固定页面',
      login: '登录',
      outlineView: '大纲查看'
    },
    themeConfig: {
      tips: {
        copyTip: '复制成功,请替换',
        resetTip: '已重置配置！'
      },
      darkMode: {
        title: '主题模式',
        darkTheme: '深色主题',
        followSystem: '跟随系统',
        dark_side: '侧边栏深色',
        dark_header: '头部深色',
        dark_bottom: '底部深色'
      },
      layoutMode: {
        title: '布局模式'
      },
      SystemTheme: {
        title: '系统主题',
        moreColor: '更多颜色'
      },
      InterfaceFunction: {
        title: '界面功能',
        scrollMode: '滚动模式',
        FixedHeader: '固定头部和多页签',
        TopMenuLocation: '顶部菜单位置',
        headHeight: '头部高度',
        tabHeight: '多页签高度',
        tabCache: '多页签缓存',
        sidebarWidth: '侧边栏展开宽度',
        sidebarMixedWidth: '左侧混合侧边栏展开宽度',
        showFooter: '显示底部',
        fixedFooter: '固定底部',
        bottomRight: '底部居右'
      },
      InterfaceDisplay: {
        title: '界面显示',
        breadCrumbs: '面包屑',
        breadCrumbsIcons: '面包屑图标',
        multipleTabs: '多页签',
        multipleTabsStyle: '多页签风格',
        pageSwitchAnimate: '页面切换动画',
        pageSwitchAnimateType: '页面切换动画类型'
      },
      themeConfig: {
        title: '主题配置',
        copyTheme: '拷贝当前配置',
        resetTheme: '重置当前配置'
      }
    },
    UserCenter: {
      route: {
        personalInformation: '个人资料',
        accountSecurity: '账户安全',
        downloadRecord: '下载记录'
      }
    },
    ppt: {
      operate: {
        editTemplate: '编辑模板',
        createPPT: '新建模板PPT',
        copy: '创建副本'
      },
      catalog: {
        title: '大纲编辑',
        regenerate: '重新生成',
        generatePPTTemplate: '生成PPT模板',
        emptyTips: '此处将显示您的大纲',
        generateTips: '请先选择对应大纲',
        generationFrom: {
          params1: '模板选择',
          params2: '主题名称',
          params3: '方案描述',
          params4: '大纲数量',
          params5: '文档上传',
          params6: '网页抓取',
          generateOutline: '生成方案大纲',
          tips: {
            uploadTips: '您可将文件拖至此处，或点击上传',
            uploadAcceptTips:
              '格式支持 .pdf .docx .mobi .xlsx .txt .pptx .epub .md .csv，请确保内容可复制，每个30MB以内，单次最多上传20个',
            params6Tips: '仅支持可公开访问、可复制内容的网站链接，批量链接请使用“,”分隔'
          }
        }
      }
    }
  }
};

export default locale;
