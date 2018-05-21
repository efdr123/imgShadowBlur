<template>
<div
  class="is-box"
  :class="{'animate': animate}"
  :style="{backgroundImage: bg, width: width, height: height}">
  <div
    class="is-bg"
    @mouseenter="transElement('hover', true)"
    @mouseleave="transElement('hover', false)"
    @mousedown="transElement('press', true)"
    @mouseup="transElement('press', false)"
    @click="transElement('click')"
    :style="{'transition-duration': animate?time + 's':''}"></div>
  <div class="is-shadow" :style="shadowStyle"></div>
</div>
</template>
<script>
export default {
  name: "is-img",
  props: {
    url: { // 图片地址
      type: String,
      default: ''
    },
    width: { // 宽度
      type: String,
      default: ''
    },
    height: { // 高度
      type: String,
      default: ''
    },
    transition: { // 变更方式
      type: String,
      default: 'hover'
    },
    size: { // 阴影大小
      type: Number,
      default: 0.9
    },
    opacity: { // 透明度
      type: Number,
      default: 0.6
    },
    blur: { // 阴影模糊指数
      type: Number,
      default: 20
    },
    tranSize: { // 激活时的阴影大小
      type: Number,
      default: 1
    },
    tranOpacity: { // 透明度
      type: Number,
      default: 0.8
    },
    tranBlur: { // 激活时的阴影模糊指数
      type: Number,
      default: 25
    },
    animate: { // 是否有过渡效果
      type: Boolean,
      default: true
    },
    time: { // 动画时间
      type: Number,
      default: 0.3
    }
  },
  data() {
    return {
      shadowStyle: {}, // 阴影的样式
      bg: "", // 背景
      isShadow: true, // 点击动画中用来判定是否激活
      boxStyle: {} // 盒子的样式
    }
  },
  created() {
    /* 组件创建时首先去获取属性 然后生成style变量 */
    this.changeBg(this.url);
    this.changeShadow(this.size, this.opacity, this.blur);
  },
  methods: {
    /* 修改背景 */
    changeBg(url) {
      this.bg = "url(" + url + ")"
    },
    /* 修改阴影 */
    changeShadow(size, opacity, blur) {
      this.shadowStyle = {
        transform: `scale(${size})`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        'transition-duration': this.animate?this.time+'s':""
      }
    },
    /* 改变元素(shadow)样式 */
    transElement(status, flag) {
      if (status == "click" && this.transition == "click") {
        if (!this.isShadow) {
          this.changeShadow(this.size, this.opacity, this.blur);
        } else {
          this.changeShadow(this.tranSize, this.tranOpacity, this.tranBlur);
        }
        this.isShadow = !this.isShadow;
      } else if (status == this.transition) {
        if (!flag) {
          this.changeShadow(this.size, this.opacity, this.blur);
        } else {
          this.changeShadow(this.tranSize, this.tranOpacity, this.tranBlur);
        }
      }
    }
  }
}
</script>

<style lang="scss">
.is-box {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.animate > .is-bg,
  &.animate > .is-shadow {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-delay: 0;
  }

  > .is-shadow,
  > .is-bg {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
  }

  > .is-shadow {
    z-index: 0;
    transform: scale(0.9);
    opacity: 0.8;
    filter: blur(30px);
  }
}
</style>
