GitHub 具有一定的社交属性，可以拥有关注/关注者，然而没有给用户添加备注名的功能。这个油猴插件可以给 GitHub 用户设置备注名，并长期存储，随时可以修改。

# 插件功能

## 功能点

- 已设置备注名的用户，显示备注名
- 未设置备注名的用户，显示 `unset`
- 点击备注名可以更改备注
- 更改完成后，按 `Enter` 即可保存更改

## 主页显示备注名

由于 GitHub 主页的“好友动态”是异步加载，所以插件无法直接给用户添加备注名。

![img](https://shaun.oss-cn-beijing.aliyuncs.com/typora/before.png/watermark)

这种情况下只需要点击上方的 `Remarks` 按钮，即可给用户添加备注名。

![after](https://shaun.oss-cn-beijing.aliyuncs.com/typora/after.png/watermark)

## 其他页面显示备注名

其他页面的备注名可以自动添加，无需点击 `Remarks`。

# 配置方法

- 进入[仓库](https://github.com/shaunyoung11/github-remarks)
- 下载 `js` 脚本文件
- 安装“油猴”插件
- 在油猴插件中添加脚本

# 实现原理

在浏览器中，有 `localStorage` 以及 `sessionStorage`。其中前者不会过期。因此，使用 `localStorage` 存储一个 `JSON` 字符串，每次将其读取为一个 `js` 对象，再对该对象进行操作。

GitHub 中用户名是唯一的，使用用户名作为区别用户的标识。

# ToDo

- 导出配置文件为 `.json`
