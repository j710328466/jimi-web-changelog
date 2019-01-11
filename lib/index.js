"use strict";
"format cjs";

var engine = require('./engine');

module.exports = engine({
  types: {
    "新功能": {
      "description": "🌟  一个新功能",
      "title": "新功能"
    },
    "修复": {
      "description": "🐛  一个 bug 修复",
      "title": "Bug 修复"
    },
    "性能优化": {
      "description": "🚀  提升性能的代码更改",
      "title": "性能优化"
    },
    "代码样式": {
      "description": "🎨  对代码含义无影响的改动（空格，格式化，丢失的';'等，非 UI 变动）",
      "title": "代码样式"
    },
    "文档": {
      "description": "📝  只有文档发生改变",
      "title": "文档"
    },
    "测试": {
      "description": "🔧  添加一些缺失的测试或者修正已存在的测试",
      "title": "测试"
    },
    "重构": {
      "description": "🔨  既不是修复 bug 也不是添加新功能的代码更改",
      "title": "代码重构"
    },
    "构建": {
      "description": "🏠  影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）",
      "title": "构建"
    },
    "持续集成": {
      "description": "📦  持续集成的配置文件和脚本的改变（例如: Travis, Circle, BrowserStack, SauceLabs）",
      "title": "持续集成"
    },
    "杂": {
      "description": "💍  没有修改源码或测试文件的其他改动",
      "title": "杂"
    },
    "撤销": {
      "description": "🔙  撤销上一次的提交",
      "title": "撤销"
    }
  },
  scopes: {
    "global": {
      "description": "影响整个项目",
      "title": "global"
    },
    "*": {
      "description": "搞不清影响范围大小",
      "title": "*"
    }
  }
});