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
2. uploadVideo_2.html 页面重新上传显示上传动画和转码提示 （uploadVideo_2.html）
3. uploadVideo_2.html 页面添加转码中动态效果（uploadVideo_2.html、\src\scss\uploadVideo.scss、\static\images\uploadVideo\transcode.png、\static\images\uploadVideo\transcode.png、\static\images\uploadVideo\transcoding.gif）
4. cheer_1.html 页面顶部图文分离、头像加圆角（\src\scss\cheer_1.scss、cheer_1.html、\static\images\cheer1\content.png）

#### 12.26
1. uploadVideo_2.html 转码失败弹窗，转码失败重新上传 (uploadVideo_2.html、\src\scss\uploadVideo.scss、\static\images\uploadVideo\transcode_error.png)

#### 12.28
1. ichmap.html 页面头像加圆角，长按保存图片修改（ichmap.html、\src\scss\ichmap.scss）

#### 12.29
1. learnPark.html 添加录音效果（learnPark.html、\src\scss\learnPark.scss）

#### 1.4
1. index.html 首页明星视频修改，主页第一个视频加controls (其他视频暂时不加，后续确认后再加上，避免修改时重复工作)（index.html、index.scss）
2. learnPark.html 修复点击空白地方会出现按钮bug（learnPark.html）
3. cheer_1.html 修复遮罩没挡住视频控件bug，字体样式修改 (cheerGuide.js、common.js、cheer_1.js、cheer_1.scss)
4. attention.html 二维码单独切 (attention.html、attention.scss、images\attention\QRcode2.png)

#### 1.11
1. 视频比例调整(index.scss、cheer_1.scss、cheer.scss、uploadVideo.scss、learnPark.scss)
2. 报名信息页面搜索修改(enroll.js)
3. 视频播放按钮错位调整（index.html、index.scss、index.js、uploadVideo_1.html、uploadVideo_2.html、uploadVideo.js、uploadVideo.scss、cheer.html、cheer.scss、cheer.js、cheer_1.html、cheer_1.scss、cheer_1.js、learnPark.html、learnPark.scss、learnPark.js、common.js、cheerGuide.js）
4. uploadVideo_2.html 页面添加初始化判断是否上传，及上传后转变成确认提交状态（uploadVideo_2.html、\static\images\uploadVideo\header3.png）
5. 开屏进度条加载修改 （index.html、index.js）
6. 好友助威邀请好友弹出层修改（common.js、cheerGuide.js）
7. 首页、助威规则主办方文案修改（\static\images\index\host.png、\static\images\index\logo.png、\static\images\index\header.png、\static\images\rule\cheerRuleBackground.png、index.scss、rule.scss）
8. 添加活动规则页面（rule_1.html、rule_1.scss、common.js ）

#### 1.18（UI样式修改）
1. 替换images文件夹
2. 更新cheer_1.scss、controls.scss、enroll.scss、common.js、rule.js
3. 更新ichmap.scss、learnPark.scss
4. 更新index.scss、uploadVideo.scss、index.js


#### 各个html对应页面：
##### index.html --->  首页
##### rule.html ---> 活动规则(弹窗，需要在页面按钮中调用)
##### rule_1.html ---> 活动规则
##### attention.html ---> 点击报名-引导关注服务号
##### uploadVideo_1.html ---> 上传视频-选题
##### uploadVideo_2.html --->  点击上传视频 
##### cheer.html ---> 参赛者视角-好友助威
##### cheer_1.html ---> 好友助威
##### cheerGuide.html ---> 新手引导-好友助威(弹窗，需要在前两个页面调用)
##### cheerRule.html ---> 助威规则(从cheer.html页面点开)
##### learnPark.html ---> 学习乐园
##### ichmap.html ---> 非遗小站地图
