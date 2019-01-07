(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{59:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("优秀的程序员都在写博客，写博客有很多好处：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[a("strong",[t._v("VuePress")]),t._v(" 是 "),a("strong",[t._v("尤雨溪")]),t._v("（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 "),a("a",{attrs:{href:"https://vuepress.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress中文网"),a("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("可以右键手动新建，也可以使用 mkdir 命令新建：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("在 vuepressBlogDemo 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.js 文件，最终项目结构如下所示：")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("目前的所有都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。")]),t._v(" "),a("p",[t._v("一般来说，有两种方案可供选择：")]),t._v(" "),a("ol",[a("li",[t._v("自己买一个服务器，阿里云、腾讯云等。")]),t._v(" "),a("li",[t._v("使用 "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Pages"),a("OutboundLink")],1),t._v(" 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。")])]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("h4",{attrs:{id:"登陆-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登陆-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 登陆 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("打开 github 网站，登陆自己的 github 账号")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("例如我的 Github 账号名称是 younggga")]),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("那么新建仓库，Repository name 就填写为：younggga.github.io")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("仓库二用来保存源码，使用Git保存代码是一个程序员应该养成的习惯，也可以自己搭建git服务器存放代码，或者使用国内运营商"),a("a",{attrs:{href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),a("OutboundLink")],1),t._v("的服务.")]),t._v(" "),t._m(32),t._v(" "),t._m(33),a("p",[t._v("把文件中的 USERNAME 改成 Github 账号名。")]),t._v(" "),a("p",[t._v("仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都推送到仓库二中，也可以手动推送。")]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("运行根目录的deploy.sh")]),t._v(" "),a("p",[t._v("此时打开https://"),a("username",[t._v(".github.io/即可看到自己的主页。")])],1),t._v(" "),a("p",[t._v("配置自己")]),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("完成了基础搭建后，就可以在docs目录下新建 "),a("code",[t._v(".md")]),t._v(" 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里给大家一份 "),a("a",{attrs:{href:"https://www.jianshu.com/p/b03a8d7b1719",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 语法整理大集合"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("p",[t._v("下面给大家安利一些VuePress自定义的方法。")]),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("在 .md 文件中书写代码时，可在 ``` 后增加 js、html、json等格式类型，代码块即可按照指定类型高亮")]),t._v(" "),a("p",[t._v("大括号中的行还会特别高亮显示")]),t._v(" "),a("p",[t._v("代码：")]),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("效果：")]),t._v(" "),t._m(38),t._m(39),t._v(" "),a("p",[t._v("代码：")]),t._v(" "),t._m(40),t._v(" "),a("p",[t._v("效果：")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),a("p",[t._v("代码：")]),t._v(" "),t._m(45),t._v(" "),a("p",[t._v("效果：\n🎉 💯 🎍 💝 🔥")]),t._v(" "),a("p",[t._v("👉 这里有一份 "),a("a",{attrs:{href:"https://www.webpagefx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emoji 大全"),a("OutboundLink")],1)]),t._v(" "),t._m(46),t._v(" "),a("p",[t._v("VuePress 默认支持 "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000012353473",target:"_blank",rel:"noopener noreferrer"}},[t._v("PWA"),a("OutboundLink")],1),t._v("，配置方法如下：")]),t._v(" "),a("p",[t._v("config.js 文件中增加")]),t._v(" "),t._m(47),a("p",[t._v("public 文件夹下新建 manifest.json 文件，添加")]),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),t._v(" "),a("ul",[a("li",[t._v("你需要一些 "),a("a",{attrs:{href:"https://www.jianshu.com/p/b03a8d7b1719",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown"),a("OutboundLink")],1),t._v(" 语法的基础知识；")]),t._v(" "),a("li",[t._v("你需要一个 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(" 账号，并在里面创建两个 repo；")]),t._v(" "),a("li",[t._v("Github 需要添加 ssh key，第一次使用的同学遇到问题可以百度解决；")]),t._v(" "),a("li",[t._v("个人博客不只可以用来写技术相关的内容，也可以有自己写的文章、随笔，甚至上传一些照片。")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么你需要一个博客？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么你需要一个博客？","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么你需要一个博客？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("帮助自己梳理、总结、理解知识点（个人提升）")]),this._v(" "),s("li",[this._v("帮助别人理解知识点（好人一生平安）")]),this._v(" "),s("li",[this._v("简历更好看，更多面试机会（升职加薪）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是-vuepress？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-vuepress？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 VuePress？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("其实类似的建站工具有很多，比如 "),a("strong",[t._v("WordPress")]),t._v("、"),a("strong",[t._v("Jekyll")]),t._v("、"),a("strong",[t._v("Hexo")]),t._v(" 等，"),a("strong",[t._v("VuePress")]),t._v("有哪些优势呢")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("界面简洁优雅")]),t._v(" "),a("li",[t._v("容易上手（半小时能搭好整个项目）")]),t._v(" "),a("li",[t._v("更好的兼容、扩展 Markdown 语法")]),t._v(" "),a("li",[t._v("支持SEO优化")]),t._v(" "),a("li",[t._v("可以挂载到GitPage")]),t._v(" "),a("li",[t._v("响应式布局，PC端、手机端")]),t._v(" "),a("li",[t._v("Google Analytics 集成")]),t._v(" "),a("li",[t._v("支持 PWA")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开始搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始搭建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建项目文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目文件夹","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目文件夹")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("mkdir vuepressBlogDemo\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"全局安装-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装 VuePress")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm install -g vuepress\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"进入-vuepressblogdemo-文件夹，初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入-vuepressblogdemo-文件夹，初始化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 进入 vuepressBlogDemo 文件夹，初始化项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v("npm init")]),this._v(" 或 "),s("code",[this._v("npm init -y")]),this._v("（默认yes）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm init -y\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"创建文件夹和文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹和文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建文件夹和文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("vuepressBlogDemo\n├─── docs\n│   ├── .vuepress\n│   │   ├── public\n│   │   └── config.js\n│   └── README.md    \n└── package.json\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在-config-js-文件中配置网站标题、描述、主题等信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-config-js-文件中配置网站标题、描述、主题等信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 config.js 文件中配置网站标题、描述、主题等信息")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zzz\\'s blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标题")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我的个人网站'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//副标题")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入到当前页面的 HTML <head> 中的标签")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加一个自定义的 favicon")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是部署到github相关的配置，部署到github仓库的分支选择")]),t._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码块显示行号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航栏配置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/one/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'two'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/two/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/younggga/blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏配置")]),t._v("\n    sidebarDepth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏显示2级")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在-package-json-文件里添加两个启动命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-package-json-文件里添加两个启动命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 package.json 文件里添加两个启动命令")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" //开发环境启动\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v(" //打包编译md文件为静态html\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一切就绪-跑起来看看吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一切就绪-跑起来看看吧","aria-hidden":"true"}},[this._v("#")]),this._v(" 一切就绪 🎉 跑起来看看吧")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("npm run dev\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"部署上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署上线","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署上线")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"挂载到自购服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载到自购服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 挂载到自购服务器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("运行")]),this._v(" "),s("p",[this._v("npm run build")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"挂载到gitpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载到gitpage","aria-hidden":"true"}},[this._v("#")]),this._v(" 挂载到GitPage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("接着我们新建两个仓库：\n"),s("strong",[this._v("新建仓库一： USERNAME.github.io （不用克隆到本地")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("！！！注意：USERNAME 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/vuepress/1.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/vuepress/2.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("这个仓库建好后，不用克隆到本地，内容更新修改都在仓库二中进行。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("新建仓库二：随便起一个名字，比如：vuepressBlog （将你本地代码push到这个库）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/vuepress/3.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"在你的项目中，创建一个如下的-deploy-sh-文件（请自行判断去掉高亮行的注释）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在你的项目中，创建一个如下的-deploy-sh-文件（请自行判断去掉高亮行的注释）","aria-hidden":"true"}},[this._v("#")]),this._v(" 在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 推送源码到git仓库(仓库二)\n# git init\n# git add -A\n# git commit -m 'deploy'\n# git push -f <仓库二地址>\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果你想要部署到 https://USERNAME.github.io\n# git push -f git@github.com:USERNAME/USERNAME.github.io.git master\n\n# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目\n# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages\n\ncd -\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"大功告成，运行发布命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大功告成，运行发布命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 👏 大功告成，运行发布命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码块高亮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块高亮","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码块高亮")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{staticClass:"language-text"},[s("code",[this._v("``` js\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"自定义容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义容器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("::: tip 提示\nthis is a tip\n:::\n\n::: warning 注意\nthis is a tip\n:::\n\n::: danger 警告\nthis is a tip\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("this is a tip")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("this is a tip")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("警告")]),this._v(" "),s("p",[this._v("this is a tip")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"支持-emoji"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-emoji","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持 Emoji")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v(":tada: :100: :bamboo: :gift_heart: :fire:\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"支持-pwa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持-pwa","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持 PWA")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入到当前页面的 HTML <head> 中的标签")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manifest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apple-touch-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.ico'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nserviceWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启 PWA")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standalone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background_color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#2196f3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三的个人主页"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"theme_color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logo.ico"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"144x144"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"related_applications"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"play"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://play.google.com/store/apps/details?id=cheeaun.hackerweb"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后在 iPhone 的 safrai 浏览器中打开本网站，点击 "),s("code",[this._v("+添加到主屏幕")]),this._v(" 就能在桌面看到一个像原生 App 一样的图标（感觉自己写了一个 App 有木有 😄）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后","aria-hidden":"true"}},[this._v("#")]),this._v(" 最后")])}],!1,null,null,null);e.options.__file="vuepress.md";s.default=e.exports}}]);