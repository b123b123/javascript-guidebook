﻿# JavaScript生存指南

先挖坑，慢慢填

## ECMAScript

**基础语法**

 - 基础
   - 词法结构
   - 变量和标识符
   - 属性和变量
   - 表达式
   - 严格模式
   - 垃圾回收机制
   - 动态脚本
 - 运算符
   - 运算符语法概述
   - 算术运算符
   - 关系运算符
   - 逻辑运算符
   - 位运算符
   - 条件、逗号、赋值、()和void运算符
   - 运算符优先级
 - 语句
   - 表达式语句、块语句、空语句和声明语句
   - 条件语句、循环语句和跳转语句
   - eval和with

数据类型

 - 基础
   - 15种原生对象类型系统综述
   - 原始值和复杂值
   - 包装对象
 - 基本类型
   - Undefined和Null
   - Boolean布尔类型
   - Number数字类型
   - String字符串类型
   - 字符串方法
 - 构造器类型
   - Math对象
   - Array数组类型
   - 正则表达式基础语法 
   - RegExp正则类型
   - 数组方法 
   - 数组复制
   - 字符串和数组的方法比较
   - 错误处理机制
 - 日期对象
   - 日期和时间基础知识
   - Date日期对象
   - 简易日历实现
   - 日期联动效果
 - 类型识别
   - 四种类型识别的方法
   - 数组检测方式
 - 类型转换
   - toString()
   - valueOf()
   - 数据类型转换

函数和对象

- 函数
  - 函数概述
  - 函数参数
  - 函数的属性和方法
  - ES6函数扩展
  - 高级技巧
  - 函数式编程
- 对象
  - 初识对象
  - 对象的属性操作
  - 对象的属性描述符
  - 对象拷贝

作用域闭包

 - 作用域
   - 内部原理
   - 词法作用域和动态作用域
   - 声明提升(hosting)
   - 块作用域
   - 一张图理解执行环境和作用域
 - 闭包
   - 到底什么才是闭包
   - 从执行环境角度看闭包
   - IIFE
   - 常见的一个循环和闭包的错误详解
   - 闭包的7种形式

面向对象

 - 面向想象基础
   - 对象的组成
   - 对象的创建和初始化
   - 工厂模式
   - 运算符new的执行过程和原理分析
 - this
   - this的4中绑定规则
   - this绑定优先级
   - 箭头函数
 - 原型链
   - 一张图理解prototype\proto和constructor的三角关系
   - 构造函数和原型对象
   - 创建对象的5种模式
   - 实现继承的3种形式
   - 继承实例之选项卡的实现
   - 继承实例之拖拽
  - 高级面向对象
   - 内置对象
   - hasOwnProperty()方法实现
   - for...in/for...of的使用及特点
   - constructor属性的使用
   - instance运算符
 - 组件开发
   - 组件的特点
   - 组件配置的作用和实现
   - 组件方法的作用和实现
   - 实例配置和默认配置
   - 组件事件的作用和实现
   - 自定义事件机制的实现
   - 基于属性的事件弊端
   - 事件监听器addEventListener的实现
   - 事件触发器trigger的实现

模块化

 - 实现javascript下的模块组织
 - commonJS规范及Node模块实现
 - 使用Browserify来实现CommonJS道德浏览器加载
 - AMD及requireJS
 - r.js打包
 - CMD及seaJS
   


   
## DOM

节点

 - 节点类型
   - 节点类型概述
   - 元素节点
   - 特性节点
   - 文本节点
   - 注释节点和文档类型节点
   - 文档节点
   - 文档片段节点
 - 获取节点
   - 元素选择器
   - getElementByClassName
   - selector选择器
   - 动态集合
 - 节点操作
   - 节点关系
   - 节点操作
   - 节点内容
   - 节点遍历
   - 节点范围
   - 区分元素特性和对象属性

脚本化CSS

 - 脚本化行间样式
 - 查询计算样式
 - 脚本化CSS类
 - 脚本化样式表
 - 动态样式
 - 脚本化伪元素

元素尺寸

 - 偏移offset
 - 客户去Client
 - 滚动Scroll
 - 回到顶部
 - 元素视图方法

 
## BOM

 - 事件机制
   - 事件流
   - 事件处理程序
   - 事件对象
   - 事件模拟
 - 事件类型
   - 鼠标事件
   - 键盘事件
   - 变动事件
   - 剪贴板事件
   - 文本事件
   - 加载事件
   - 焦点管理
 

Event

 - 定时器
   - setTimeout()和setInterval()
   - requestAnimationFrame()
   - 定时器应用(时钟、倒计时、秒表和闹钟)
 - WINDOW属性
   - 对话框
   - 窗口操作
   - location对象
   - history对象
   - screen对象
   - navigation对象和用户代理检测
   - 能力检测

动画和运动

 - 动画
   - 原生拖放
   - 模拟拖拽
   - 磁性吸附
   - 碰撞检测
   - 拖拽改变元素大小
   - 模拟滚动条
 - 运动
   - 匀速运动
   - 变速运动
   - 曲线运动
   - 抖动
   - 缓冲运动和弹性运动
   - 投掷和轨迹
   - 鼠标跟随运动
   - 碰壁运动
   - 碰撞运动
   

## AJAX

 - 基础
   - JSON
   - XHR对象
   - 请求方式
   - 响应解码
   - FormData
   - 进度事件
   - 头部信息
   - 传递JSON
   - 表单提交
   - jQuery中的ajax
 - 跨域
   - CORS
   - 图片Ping
   - JSONP

存储

 - Cookies
 - IE userData
 - Web Storage

   