# 使用官方的 Node.js 基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目的其他文件到工作目录
COPY . .

# 暴露容器的端口，与 Express 服务监听的端口一致
EXPOSE 3000

# 定义容器启动时执行的命令
# CMD ["node", "app.js"]
CMD ["node", "bin/www"]
