---
title: 在移动设备上进行博客编辑和部署
copyright: true
date: 2020-05-10 10:09:12
tags: 
categories: 教程
description: 
cover: /images/deploy-on-mobile/cover.jpg
---



# 导言

一般来说我们部署博客都是在电脑端，如果出门在外，想要用移动设备进行博客的编辑和部署，应该怎么操作？

### 注意

* Hexo支持跨平台，所以博客的操作基本相同；

* 因为网上已经有很多教程了，我这里就大概讲一下步骤和注意事项😀
* 具体操作因人而异，**请根据自己的状况取舍**，不要全部照抄。

# 正文

## 准备材料

* 一台安卓手机（已 root 且做好防范措施）
* 安装 Termux（前往[官网](https://termux.com/)或者[Google  Play](https://play.google.com/store/apps/details?id=com.termux&hl=zh)下载）
* 能查看系统根目录的文件管理器，如 RE 或 MT 管理器，手机需root。推荐MT
* 【建议】科学上网工具

![Termux 主界面](/images/deploy-on-mobile/termux-1.jpg)

> 我找资料的时候发现没有root的手机也有[解决办法](https://zhuanlan.zhihu.com/p/35668237)，不过我自己没有尝试，在此列出作为参考：
>
>  先执行```$ pkg install proot```，然后执行 ```$ termux-chroot``` 就可以模拟出root权限。详情见链接↑
>
> 获取完成后就可以用Termux编辑，但是无法用文件管理器看到。

## 配置环境

### 初始化

`$ apt update`

``$ apt upgrade``

### 安装node.js长期支持版

```bash
$ apt install nodejs-lts
```

原因：node.js的最新版在博客generate时容易出现如下错误：

~~~bash
TypeError [ERR_INVALID_ARGTYPE]: The "mode" argument mast be integer. Received an instance of Object
~~~

[nodejs新版的报错截图](/images/deploy-on-mobile/error-node-too-new.jpg)

![](/images/deploy-on-mobile/install-nodejs.jpg)

### 安装 git

```bash
$ apt install git
```

![](/images/deploy-on-mobile/install-git.jpg)

### 建立博客文件夹

给文件管理器授予root权限；

进入手机根目录，在 ``/data/data/com.termux/files/``新建一个存放博客的文件夹，如“Blog”。

> 或者Termux使用命令：```$ mkdir Blog```直接创建

### 定位到Blog

```bash
$ cd Blog
```



> 如果你的博客在git上有备份：
>
> 克隆→定位→安装Hexo→安装组件→安装主题→生成、部署
>
> ```bash
> $ git clone https://e.coding.net/xxx/xxx.git
> $ cd xxx
> $ npm install hexo --save
> $ npm install
> $ git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
> $ hexo g -s
> ```

### 安装 hexo-cli

> 使用淘宝的镜像：```$ npm config set registry http://registry.npm.taobao.org```

**安装Hexo**：```$ npm install hexo-cli -g```

**Hexo初始化**：```$ hexo init```

安装必要组件：```$ npm install```

完成。

## 开始编辑

下面的不用我多说了吧

流程和电脑端的操作基本一致

具体的请见参考资料



# 参考资料

这个大佬写得非常全面，从准备到部署到debug都有（不是恰饭）：https://zhuanlan.zhihu.com/p/35668237

https://lanlan2017.github.io/blog/4a95e633/