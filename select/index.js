import {CFCMSelect} from './src/Plugins_es6_select.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Select', { value: CFCMSelect });
  }
}