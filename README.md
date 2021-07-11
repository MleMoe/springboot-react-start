# spring boot-react-start

一个 MySql + Spring Boot + React 的前后端分离 demo，for cute ShenShen

## 环境准备

### 后端

可以 安装 IDEA，安装 JDK/Maven， IDEA 可以直接帮忙搞定。

若想体验一波配环境的快感，就：⬇️

首先，安装 java

mac：

```bash
brew install java
```

配置 PATH：

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"' >> ~/.zshrc
echo 'export CPPFLAGS="-I/opt/homebrew/opt/openjdk/include"' >> ~/.zshrc
source .zshrc
```

Maven，Java-based project management，一个 Java 的项目管理工具。
安装：

```bash
brew install maven
```

选用 MySql 作为数据库，同样 brew 解决

```bash
# 安装
brew install mysql
# 启动
mysql.server start
# 安全设置（如密码）
mysql_secure_installation
```

然后需要一个 mysql 的 unified visual tool，我常用 mysql workbench，这是 mysql 官方的工具，支持高版本的 mysql，免费（重要）。

```bash
brew install mysqlworkbench
```

然后直接在 workbench 中连接打开 mysql 就可以了。

### 前端

- node
- vscode，编辑器

## 运行

### 后端部分

在 mysql 自己创建 demo 数据库，user 表，并相应字段。

在 `src/main/resources/application.propertiies` 文件内更换自己的 mysql 密码。

IDEA 右上角 Run

默认监听 8080 端口

### 前端部分

```bash
cd frontend
yarn
yarn dev
```

默认打开 `http://localhost:3000/`
