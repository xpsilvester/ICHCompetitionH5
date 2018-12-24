### 一、下载依赖包
```
npm install
```
### 二、打包
```
gulp
```

### 三、更新日志

#### 12.13
1. 添加learnPark.html页面
2. enroll、uploadVideo_1 更新‘活动规则’按钮交互效果
3. enroll 图片路径更新

#### 12.14
1. 添加cheer.html、cheer_1.html、cheerGuide.html(弹窗，需要在前两个页面调用)、attention.html
2. learnPark.html 页面与后台对接代码更新

#### 12.15
1. 添加index.html 页面
2. learnPark.html 页面 报名按钮修改 视频修改 增加播放按钮状态 

#### 12.17
1. 添加uploadVideo_2.html、ichmap.html页面
2. learnPark.html 添加播放动效

#### 12.18
1. 首页index.html添加开始加载动效、开屏明星喊话
2. uploadVideo_1.html 更新选题图片，scss样式修改
3. \static\font\enroll文件夹 添加字体文件PingFang Regular.woff 
4. cheer_1.html 页面头像改为后台调用
5. cheer_1.html、cheer.html 页面点击弹出层

#### 12.19
1. 更新\static\images\ichmap\active 中16个图标
2. learnPark.html页面 原声音频<audio>标签修改
3. 调试cheer_1.html、cheer.html 页面点击弹出层不能scroll问题，请替换\src\js\common.js和\static\js\common.min.js文件
4. 非遗小地图头像动态获取

#### 12.20
1. index.html 页面视频增加代打卡、已打卡，二维码单独切图
2. cheer_1.html、cheer.html 页面点击弹出层修改
3. 添加助威规则页面cheerRule.html(从cheer.html页面点开)

#### 12.21
1. index.html 页面已打卡、学习中、待打卡图标替换（static\images\index中的learning0.png learning.png learning1.png）
2. enroll.html 页面解决重新发送验证码字体重叠 (enroll.html、\src\js\enroll.js 、\src\scss\controls.scss)
3. index.html 页面 视频点击修改，展示学习中、待打卡动态获取，明星助威图片切图(index.html、\src\scss\index.scss、\src\js\index.js,添加static\images\index中的qcodeBox.png、watch.png)

#### 12.24
1. learnPark.html 页面播放音频修改(\static\images\learnPark\voice_play.gif 、learnPark.html)
2. uploadVidoe_2.html 页面修复上传失败后不能上传bug、添加iphone4、5页面兼容适配、添加转码过程函数transcode()、(\src\scss\uploadVideo.scss、uploadVideo_2.html)

#### 12.25
1. enroll.html 页面文案修改 “没上小学”改为“学龄前” （enroll.html）
2. uploadVideo_2.html 页面重新上传显示上传动画和转码提示 （uploadVideo_2.html "//重新提交" ）


#### 各个html对应页面：
##### index.html --->  首页
##### rule.html ---> 活动规则(弹窗，需要在页面按钮中调用)
##### attention.html ---> 点击报名-引导关注服务号
##### uploadVideo_1.html ---> 上传视频-选题
##### uploadVideo_2.html --->  点击上传视频 
##### cheer.html ---> 参赛者视角-好友助威
##### cheer_1.html ---> 好友助威
##### cheerGuide.html ---> 新手引导-好友助威(弹窗，需要在前两个页面调用)
##### cheerRule.html ---> 助威规则(从cheer.html页面点开)
##### learnPark.html ---> 学习乐园
##### ichmap.html ---> 非遗小站地图
