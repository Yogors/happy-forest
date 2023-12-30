import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'Happy Forest',
      loginSuccess: 'Login Successful',
      welcomeBack: 'Welcome'
    },
    userCenter: {
      username: 'User Name',
      id: 'ID',
      gender: 'Gender',
      email: 'Email',
      headUrl: 'Avatar'
    },
    common: {
      setting: 'Setting',
      langChange: 'Language Switch',
      volumeChange: 'Volume Control',
      phoneNumber: 'Phone Number',
      captchaCode: 'Verification Code',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      back: 'Back',
      confirm: 'Confirm',
      cancel: 'Cancel',
      tip: 'Info',
      search: 'Search',
      fullscreen: 'Fullscreen',
      themeMode: 'Theme Mode',
      notification: 'Notification',
      themeConfig: 'Theme Config',
      UserCenter: 'User Center',
      logout: 'Sign Out',
      close: 'Close',
      tab: 'Tab',
      save: 'Update',
      reload: 'Reload',
      delete: 'Delete',
      tips: {
        quitTips: 'Are you sure you want to log out?',
        searchTips: 'Please enter keyword search',
        emptyData: 'No Data',
        formSelect: 'Please select',
        formInput: 'Please enter',
        addSuccess: 'Created successfully',
        editSuccess: 'Modified Successfully',
        clickToUpload: 'Click to upload',
        registerSuccess: 'Register successfully',
        operationSuccessful: 'Operation Successful'
      }
    },
    welcome: {
      tip: "The Happy Forest is a magical land where a group of joyful little animals resides, living their lives in perpetual happiness. They harness the magical art of origami to construct homes and create various items. This time, a knowledgeable and experienced new visitor has arrived in the Happy Forest! What kind of delightful surprises will their presence bring to the animals' otherwise ordinary lives?",
      tips6: 'Have a good day',
      tips7: 'Generate customized solution',
      tips8: 'Generate customized solutions based on your documents and needs'
    },
    login: {
      'pwd-login': 'Account&Password',
      'mobile-login': 'Mobile&Password',
      'code-login': 'Mobile Phone Verification Code',
      register: 'Register',
      'reset-pwd': 'Reset Password',
      'bind-wechat': 'Bind WeChat',
      'pwd-login-tips': {
        accountTips: 'Please enter user name',
        mobileTips: 'Please enter mobile',
        passwordTips: 'Please enter password',
        captchaTips: 'Please enter verification code',
        rememberMeTips: 'Remember Me',
        resetPwdTips: 'Forget the password'
      },
      registerTips: {
        getVerificationCode: 'Get verification code',
        Seconds: 's ',
        emptyPhone: 'Phone number can not be blank',
        errorPhone: 'Wrong format of phone number',
        successPhone: 'Verification code sent successfully',
        emailTips: 'Email can not be blank',
        formatError: 'Wrong format',
        passwordError: 'The password is 6-18 digits/characters/symbols, at least 2 combinations',
        confirmPwdTips: 'Please enter the confirmation password',
        notMatchPwdTips: 'The entered value does not match the password',
        agreementTips: 'Please read and accepted《User Agreement》 and 《privacy policy》'
      },
      agreementTips: {
        tips: 'I have carefully read and accepted',
        userAgreement: '《User Agreement》',
        privacyPolicy: '《privacy policy》'
      }
    },
    routes: {
      home: 'Home',
      generationTool: 'Generation Tool',
      workbench: 'Workbench',
      pptLIst: 'PPT List',
      userInfo: 'User Center',
      notFound: 'Not Found',
      route500: 'Server Error',
      route403: 'No Permission',
      routeConstant: 'Constant Page',
      login: 'Login',
      outlineView: 'Outline View'
    },
    themeConfig: {
      tips: {
        copyTip: 'Copy successfully, please replace',
        resetTip: 'Reset Config Successfully'
      },
      darkMode: {
        title: 'Theme Mode',
        darkTheme: 'Dark Mode',
        followSystem: 'Follow System',
        dark_side: 'Dark Sidebar',
        dark_header: 'Dark Head',
        dark_bottom: 'Dark Bottom'
      },
      layoutMode: {
        title: 'Layout Mode'
      },
      SystemTheme: {
        title: 'System Theme',
        moreColor: 'More Color'
      },
      InterfaceFunction: {
        title: 'Interface Function',
        scrollMode: 'Scroll Mode',
        FixedHeader: 'Fixed Header And Tabs',
        TopMenuLocation: 'Top Menu Location',
        headHeight: 'Head Height',
        tabHeight: 'Multi-Tab Height',
        tabCache: 'Multi-Tab Cache',
        sidebarWidth: 'Sidebar Width',
        sidebarMixedWidth: 'Left Sidebar Width',
        showFooter: 'Show Footer',
        fixedFooter: 'Fixed Footer',
        bottomRight: 'Fixed Fixed Right'
      },
      InterfaceDisplay: {
        title: 'Interface Display',
        breadCrumbs: 'Breadcrumbs',
        breadCrumbsIcons: 'Breadcrumbs Icon',
        multipleTabs: 'Multiple Tabs',
        multipleTabsStyle: 'Multiple Tabs Style',
        pageSwitchAnimate: 'Switch Animation',
        pageSwitchAnimateType: 'Switch Animation Style'
      },
      themeConfig: {
        title: 'Theme Config',
        copyTheme: 'Copy Current Config',
        resetTheme: 'Reset Config'
      }
    },
    UserCenter: {
      route: {
        personalInformation: 'Personal Info',
        accountSecurity: 'Account Security',
        downloadRecord: 'Download Record'
      }
    },
    ppt: {
      operate: {
        editTemplate: 'Edit Template',
        createPPT: 'Create new template PPT',
        copy: 'Copy'
      },
      catalog: {
        title: 'Outline Edit',
        regenerate: 'Refresh',
        generatePPTTemplate: 'Generate PPT Template',
        emptyTips: 'Your outline will appear here',
        generateTips: 'Please select the corresponding outline first',
        generationFrom: {
          params1: 'Template',
          params2: 'Topic',
          params3: 'Solution Description',
          params4: 'Number Of Outlines',
          params5: 'Document Upload',
          params6: 'Web Scraping',
          generateOutline: 'Generate Outline',
          tips: {
            uploadTips: 'Drag Or Click',
            uploadAcceptTips:
              'Accept .pdf .docx .mobi .xlsx .txt .pptx .epub .md .csv， Within 30MB, and maximum of 20',
            params6Tips:
              'Only website links with publicly accessible and copyable content are supported. Please use "," to separate batch links.'
          }
        }
      }
    }
  }
};

export default locale;
