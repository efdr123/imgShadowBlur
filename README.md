# img_shadow_blur

> A Vue component to img_shadow_blur 一个图片阴影插件

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 使用
``` bash
// ES6
import imgshadowblur from 'img_shadow_blur.js'
// require
var imgshadowblur = require('imgShadowBlur')

Vue.use(imgshadowblur)

// 或者直接使用script导入
<script src="./img-shadow-blur.js"></script>

// 作为组件的方式使用
<is-img />
```

##配置
``` bash
<is-img 
    url="bg.png" width="100px" height="100px" transition="hover"
    :size="1" :opacity="0.5" :blur="10" :tranSize="1.2"
    :tranOpacity="0.8" :tranBlur="20" :animate="true" :time="0.3"/>
```
##属性

|    属性名     |                       描述                       |  类型   | 默认值 |
| :---------: | :-----------------------------------------------------: | :-----: | :-----: |
|     url     |                        图片地址                         | String  |         |
|    width    |              图片宽度，需自带单位如px或rem              | String  |         |
|   height    |              图片高度，需自带单位如px或rem              | String  |         |
| transition  | 阴影过渡动画，可选值为"none"、"hover"、"press"、"click" | String  |  hover  |
|    size     |                      阴影初始大小                       | Number  |   0.9   |
|   opacity   |                       阴影透明度                        | Number  |   0.6   |
|    blur     |                       阴影模糊度                        | Number  |   20    |
|  tranSize   |            当hover或press或激活时阴影的大小             | Number  |    1    |
| tranOpacity |           当hover或press或激活时阴影的透明度            | Number  |   0.8   |
|  tranBlur   |           当hover或press或激活时阴影的模糊度            | Number  |   25    |
|   animate   |                    过渡动画是否开启                     | Boolean |  true   |
|    time     |                     过渡动画的时间                      | Number  |   0.3   |

