webpackHotUpdate(0,{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _index = __webpack_require__(64);\n\n/**\r\n * 应用入口\r\n * @return {[type]} [description]\r\n */\nvar App = function App() {\n\n    //更新版本号记录\n    Xut.Version = 782;\n\n    /**\r\n     * 动态html文件挂载点\r\n     * 用于content动态加载js文件\r\n     * 目前暂时给epub使用，文本框\r\n     * @type {Object}\r\n     */\n    window.HTMLCONFIG = {};\n\n    /**\r\n     * \r\n     * 2015.10.19新增\r\n     * ibooks处理\r\n     * epub ibooks模式的配置文件\r\n     * 这个是在index.html中会传入几个值\r\n     * \r\n     *   window.IBOOKSCONFIG = {\r\n     *       compiled: true,\r\n     *       pageIndex: 1,\r\n     *       existSvg: true,\r\n     *       screenSize: {\r\n     *           \"width\": 718,\r\n     *           \"height\": 958\r\n     *       }\r\n     *   }\r\n     */\n    var IBOOKSCONFIG = window.IBOOKSCONFIG;\n\n    //如果是IBOOS模式处理\n    //注入保持与数据库H5查询一致\n    if (IBOOKSCONFIG && IBOOKSCONFIG.data) {\n        _.each(IBOOKSCONFIG.data, function (data, tabName) {\n            data.item = function (index) {\n                return this[index];\n            };\n        });\n        //ios上的ibooks模式\n        //直接修改改isBrowser模式\n        Xut.plat.isBrowser = true;\n        Xut.plat.isIOS = false;\n    }\n\n    //配置ibooks参数\n    Xut.IBooks = {\n\n        /**\r\n         * 当前页面编号\r\n         * @return {[type]} [description]\r\n         */\n        pageIndex: function () {\n            if (IBOOKSCONFIG) {\n                //当期页面索引1开始\n                return IBOOKSCONFIG.pageIndex + 1;\n            }\n        }(),\n\n        /**\r\n         * 是否存在svg\r\n         * @type {[type]}\r\n         */\n        existSvg: IBOOKSCONFIG ? IBOOKSCONFIG.existSvg : false,\n\n        /**\r\n         * 是否启动了ibooks模式\r\n         * @return {[type]} [description]\r\n         */\n        Enabled: function () {\n            return IBOOKSCONFIG ? true : false;\n        }(),\n\n        /**\r\n         * 全部对象\r\n         * @type {[type]}\r\n         */\n        CONFIG: IBOOKSCONFIG,\n\n        /**\r\n         * 运行期间\r\n         * @return {[type]} [description]\r\n         */\n        runMode: function runMode() {\n            //确定为ibooks的运行状态\n            //而非预编译状态\n            if (IBOOKSCONFIG && !IBOOKSCONFIG.compiled) {\n                return true;\n            }\n            return false;\n        },\n        /**\r\n         * 编译期间\r\n         * @return {[type]} [description]\r\n         */\n        compileMode: function compileMode() {\n            //确定为ibooks的编译状态\n            //而非预编译状态\n            if (IBOOKSCONFIG && IBOOKSCONFIG.compiled) {\n                return true;\n            }\n            return false;\n        }\n    };\n\n    //修复ios 安卓浏览器不能自动播放音频的问题\n    //在加载时创建新的audio.video 用的时候更换\n    Xut.fix = Xut.fix || {};\n\n    //移动端浏览器平台\n    if (Xut.plat.isBrowser && (Xut.plat.isIOS || Xut.plat.isAndroid)) {\n        var fixaudio = function fixaudio() {\n            if (!Xut.fix.audio) {\n                Xut.fix.audio = new Audio();\n                Xut.fix.video = document.createElement(\"Video\");\n                document.removeEventListener('touchstart', fixaudio, false);\n            }\n        };\n        document.addEventListener('touchstart', fixaudio, false);\n    }\n\n    (0, _index.init)();\n};\n\n$(function () {\n    App();\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2FwcC5qcz8zYmI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU9BLElBQUksTUFBTSxTQUFOLEdBQU0sR0FBVzs7O0FBSWpCLFFBQUksT0FBSixHQUFjLEdBQWQ7Ozs7Ozs7O0FBUUEsV0FBTyxVQUFQLEdBQW9CLEVBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLFFBQUksZUFBZSxPQUFPLFlBQTFCOzs7O0FBSUEsUUFBSSxnQkFBZ0IsYUFBYSxJQUFqQyxFQUF1QztBQUNuQyxVQUFFLElBQUYsQ0FBTyxhQUFhLElBQXBCLEVBQTBCLFVBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0I7QUFDMUMsaUJBQUssSUFBTCxHQUFZLFVBQVMsS0FBVCxFQUFnQjtBQUN4Qix1QkFBTyxLQUFLLEtBQUwsQ0FBUDtBQUNILGFBRkQ7QUFHSCxTQUpMOzs7QUFPQSxZQUFJLElBQUosQ0FBUyxTQUFULEdBQXFCLElBQXJCO0FBQ0EsWUFBSSxJQUFKLENBQVMsS0FBVCxHQUFpQixLQUFqQjtBQUNIOzs7QUFHRCxRQUFJLE1BQUosR0FBYTs7Ozs7O0FBTVQsbUJBQVcsWUFBVztBQUNsQixnQkFBSSxZQUFKLEVBQWtCOztBQUVkLHVCQUFPLGFBQWEsU0FBYixHQUF5QixDQUFoQztBQUNIO0FBQ0osU0FMVSxFQU5GOzs7Ozs7QUFpQlQsa0JBQVUsZUFBZSxhQUFhLFFBQTVCLEdBQXVDLEtBakJ4Qzs7Ozs7O0FBdUJULGlCQUFTLFlBQVc7QUFDaEIsbUJBQU8sZUFBZSxJQUFmLEdBQXNCLEtBQTdCO0FBQ0gsU0FGUSxFQXZCQTs7Ozs7O0FBK0JULGdCQUFRLFlBL0JDOzs7Ozs7QUFxQ1QsaUJBQVMsbUJBQVc7OztBQUdoQixnQkFBSSxnQkFBZ0IsQ0FBQyxhQUFhLFFBQWxDLEVBQTRDO0FBQ3hDLHVCQUFPLElBQVA7QUFDSDtBQUNELG1CQUFPLEtBQVA7QUFDSCxTQTVDUTs7Ozs7QUFpRFQscUJBQWEsdUJBQVc7OztBQUdwQixnQkFBSSxnQkFBZ0IsYUFBYSxRQUFqQyxFQUEyQztBQUN2Qyx1QkFBTyxJQUFQO0FBQ0g7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7QUF4RFEsS0FBYjs7OztBQThEQSxRQUFJLEdBQUosR0FBVSxJQUFJLEdBQUosSUFBVyxFQUFyQjs7O0FBR0EsUUFBSSxJQUFJLElBQUosQ0FBUyxTQUFULEtBQXVCLElBQUksSUFBSixDQUFTLEtBQVQsSUFBa0IsSUFBSSxJQUFKLENBQVMsU0FBbEQsQ0FBSixFQUFrRTtBQUM5RCxZQUFJLFdBQVcsU0FBWCxRQUFXLEdBQVc7QUFDdEIsZ0JBQUksQ0FBQyxJQUFJLEdBQUosQ0FBUSxLQUFiLEVBQW9CO0FBQ2hCLG9CQUFJLEdBQUosQ0FBUSxLQUFSLEdBQWdCLElBQUksS0FBSixFQUFoQjtBQUNBLG9CQUFJLEdBQUosQ0FBUSxLQUFSLEdBQWdCLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBLHlCQUFTLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDLFFBQTNDLEVBQXFELEtBQXJEO0FBQ0g7QUFDSixTQU5EO0FBT0EsaUJBQVMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsUUFBeEMsRUFBa0QsS0FBbEQ7QUFDSDs7QUFFRDtBQUNILENBN0hEOztBQWdJQSxFQUFFLFlBQVc7QUFDVDtBQUNILENBRkQiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0L2luZGV4J1xyXG5cclxuXHJcbi8qKlxyXG4gKiDlupTnlKjlhaXlj6NcclxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5sZXQgQXBwID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuXHJcbiAgICAvL+abtOaWsOeJiOacrOWPt+iusOW9lVxyXG4gICAgWHV0LlZlcnNpb24gPSA3ODI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjmgIFodG1s5paH5Lu25oyC6L2954K5XHJcbiAgICAgKiDnlKjkuo5jb250ZW505Yqo5oCB5Yqg6L29anPmlofku7ZcclxuICAgICAqIOebruWJjeaaguaXtue7mWVwdWLkvb/nlKjvvIzmlofmnKzmoYZcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHdpbmRvdy5IVE1MQ09ORklHID0ge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogMjAxNS4xMC4xOeaWsOWinlxyXG4gICAgICogaWJvb2tz5aSE55CGXHJcbiAgICAgKiBlcHViIGlib29rc+aooeW8j+eahOmFjee9ruaWh+S7tlxyXG4gICAgICog6L+Z5Liq5piv5ZyoaW5kZXguaHRtbOS4reS8muS8oOWFpeWHoOS4quWAvFxyXG4gICAgICogXHJcbiAgICAgKiAgIHdpbmRvdy5JQk9PS1NDT05GSUcgPSB7XHJcbiAgICAgKiAgICAgICBjb21waWxlZDogdHJ1ZSxcclxuICAgICAqICAgICAgIHBhZ2VJbmRleDogMSxcclxuICAgICAqICAgICAgIGV4aXN0U3ZnOiB0cnVlLFxyXG4gICAgICogICAgICAgc2NyZWVuU2l6ZToge1xyXG4gICAgICogICAgICAgICAgIFwid2lkdGhcIjogNzE4LFxyXG4gICAgICogICAgICAgICAgIFwiaGVpZ2h0XCI6IDk1OFxyXG4gICAgICogICAgICAgfVxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICAgIHZhciBJQk9PS1NDT05GSUcgPSB3aW5kb3cuSUJPT0tTQ09ORklHO1xyXG4gICBcclxuICAgIC8v5aaC5p6c5pivSUJPT1PmqKHlvI/lpITnkIZcclxuICAgIC8v5rOo5YWl5L+d5oyB5LiO5pWw5o2u5bqTSDXmn6Xor6LkuIDoh7RcclxuICAgIGlmIChJQk9PS1NDT05GSUcgJiYgSUJPT0tTQ09ORklHLmRhdGEpIHtcclxuICAgICAgICBfLmVhY2goSUJPT0tTQ09ORklHLmRhdGEsIGZ1bmN0aW9uKGRhdGEsIHRhYk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuaXRlbSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2lvc+S4iueahGlib29rc+aooeW8j1xyXG4gICAgICAgICAgICAvL+ebtOaOpeS/ruaUueaUuWlzQnJvd3NlcuaooeW8j1xyXG4gICAgICAgIFh1dC5wbGF0LmlzQnJvd3NlciA9IHRydWU7XHJcbiAgICAgICAgWHV0LnBsYXQuaXNJT1MgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mFjee9rmlib29rc+WPguaVsFxyXG4gICAgWHV0LklCb29rcyA9IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5b2T5YmN6aG16Z2i57yW5Y+3XHJcbiAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcGFnZUluZGV4OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKElCT09LU0NPTkZJRykge1xyXG4gICAgICAgICAgICAgICAgLy/lvZPmnJ/pobXpnaLntKLlvJUx5byA5aeLXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSUJPT0tTQ09ORklHLnBhZ2VJbmRleCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KCksXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuWtmOWcqHN2Z1xyXG4gICAgICAgICAqIEB0eXBlIHtbdHlwZV19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXhpc3RTdmc6IElCT09LU0NPTkZJRyA/IElCT09LU0NPTkZJRy5leGlzdFN2ZyA6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKblkK/liqjkuoZpYm9va3PmqKHlvI9cclxuICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cclxuICAgICAgICAgKi9cclxuICAgICAgICBFbmFibGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIElCT09LU0NPTkZJRyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9KCksXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWFqOmDqOWvueixoVxyXG4gICAgICAgICAqIEB0eXBlIHtbdHlwZV19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQ09ORklHOiBJQk9PS1NDT05GSUcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/kOihjOacn+mXtFxyXG4gICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJ1bk1vZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvL+ehruWumuS4umlib29rc+eahOi/kOihjOeKtuaAgVxyXG4gICAgICAgICAgICAvL+iAjOmdnumihOe8luivkeeKtuaAgVxyXG4gICAgICAgICAgICBpZiAoSUJPT0tTQ09ORklHICYmICFJQk9PS1NDT05GSUcuY29tcGlsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOe8luivkeacn+mXtFxyXG4gICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbXBpbGVNb2RlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy/noa7lrprkuLppYm9va3PnmoTnvJbor5HnirbmgIFcclxuICAgICAgICAgICAgLy/ogIzpnZ7pooTnvJbor5HnirbmgIFcclxuICAgICAgICAgICAgaWYgKElCT09LU0NPTkZJRyAmJiBJQk9PS1NDT05GSUcuY29tcGlsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5L+u5aSNaW9zIOWuieWNk+a1j+iniOWZqOS4jeiDveiHquWKqOaSreaUvumfs+mikeeahOmXrumimCBcclxuICAgIC8v5Zyo5Yqg6L295pe25Yib5bu65paw55qEYXVkaW8udmlkZW8g55So55qE5pe25YCZ5pu05o2iXHJcbiAgICBYdXQuZml4ID0gWHV0LmZpeCB8fCB7fTtcclxuXHJcbiAgICAvL+enu+WKqOerr+a1j+iniOWZqOW5s+WPsFxyXG4gICAgaWYgKFh1dC5wbGF0LmlzQnJvd3NlciAmJiAoWHV0LnBsYXQuaXNJT1MgfHwgWHV0LnBsYXQuaXNBbmRyb2lkKSkge1xyXG4gICAgICAgIHZhciBmaXhhdWRpbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIVh1dC5maXguYXVkaW8pIHtcclxuICAgICAgICAgICAgICAgIFh1dC5maXguYXVkaW8gPSBuZXcgQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIFh1dC5maXgudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVmlkZW9cIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZml4YXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZpeGF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpO1xyXG59XHJcblxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIEFwcCgpXHJcbn0pXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xpYi9hcHAuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})