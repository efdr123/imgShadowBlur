import imgShadow from './img-shadow.vue' // 导入组件
const imgshadowblur = {
  install(Vue, options) {
    Vue.component(imgShadow.name, imgShadow)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(imgshadowblur);
}
export default imgshadowblur // 导出..
