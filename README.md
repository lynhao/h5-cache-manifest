# h5-cache-manifest
cahce manifest for h5


## web端离线存储方案

> 原理: html头部设置manifest属性，浏览器检测到，如果第一次访问，会根据manifest的配置文件进行下载并离线储存，当处于离线状态，则加载离线资源

注意：

- 站点离线存储的容量限制是5M

- 如果manifest文件，或者内部列举的某一个文件不能正常下载，整个更新过程将视为失败，浏览器继续全部使用老的缓存

- 引用manifest的html必须与manifest文件同源，在同一个域下

- 浏览器缓存优先级 > manifest

- 源服务器更新资源后, manifest需更新

- 更新资源后，如需立刻生效，可以使用window.applicationCache.swapCache()

- 浏览器使用离线存储步骤： 
  
  - 使用已经存在的离线资源
  - 检查mannifest是否更新

# HOW TO WORK

```bash
npm install
npm start
```
